import { GetStaticProps } from "next";
import ReactDOMServer from "react-dom/server";
import pages from "../../gen/pages.json";
import ssgConfig from "../../amdxg.config";
import { Article, Layout } from "../../lib/amdxg-components";
import Head from "next/head";

type Props = {
  slug: string;
  toc: Array<any>;
  history: Array<any>;
  writer: {
    name: string;
    avatar: string;
    twitter: string;
    text: string;
  };
  frontmatter: {
    description?: string;
    slug: string;
    title: string;
    lead?: string;
    created: number;
    writer: string;
    tags?: string[];
  };
  tags: string[];
  related: {
    slug: string;
    title: string;
    created: string;
  }[];
  html: string;
};

export const config = { amp: true };

export function getStaticPaths() {
  const paths = pages.map((page) => {
    return `/media/${page.slug}`;
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (props) => {
  const slug = props?.params?.slug;
  const { default: Doc, toc, frontmatter } = await import(
    `../../docs/${slug}.mdx`
  );
  const writerId: string = frontmatter.writer;
  const { default: writer } = await import(`../../writer/${writerId}.json`);
  const { default: history } = await import(`../../gen/${slug}.history.json`);
  
  let related:any = [];
  pages.forEach(page => {
    frontmatter.related.forEach(element => {
      if(page.slug === element) {
        related.push({slug: page.slug, title: page.title, created: page.created})
      }
    });
  });
  return {
    props: {
      slug,
      toc,
      history,
      tags: frontmatter.tags || [],
      related,
      writer,
      frontmatter: frontmatter || { title: slug, created: 0, tags: [] },
      html: ReactDOMServer.renderToStaticMarkup(<Doc amp />),
    } as Props,
  };
};

export default (props: Props) => (
  <>
    <Head>
      <title>
        {props.frontmatter.title} - {ssgConfig.siteName}
      </title>
      <meta property="og:title" content={props.frontmatter.title} />
      <meta name="twitter:site" content="@shosetunoki" />
      <meta
        property="og:description"
        content={props.frontmatter.description ?? ""}
      />
      <meta property="og:url" content={ssgConfig.host + props.slug} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={ssgConfig.host + "ogp/" + props.slug + ".png"}
      />
      <link rel="canonical" href={ssgConfig.host + props.slug} />
    </Head>

    <Layout config={ssgConfig}>
      <Article
        ssgConfig={ssgConfig}
        history={props.history}
        slug={props.slug}
        toc={props.toc}
        title={props.frontmatter.title}
        lead={props.frontmatter.lead}
        createdAt={props.frontmatter.created}
        writer={props.writer}
        tags={props.tags}
        related={props.related}
      >
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </Article>
    </Layout>
  </>
);
