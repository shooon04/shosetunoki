// @ts-nocheck
/* eslint-disable */
import Head from "next/head";
import { Layout, TagPage } from "../../../lib/amdxg-components";
import { GetStaticProps } from "next";
import ssgConfig from "../../../amdxg.config";
import tagmap from "../../../gen/tagmap.json";

export const config = { amp: false };

export function getStaticPaths() {
  const paths = Object.keys(tagmap).map((tag) => {
    return `/media/tags/${tag}`;
  });
  return {
    paths,
    fallback: false,
  };
};

type Props = {
  tagName: string;
  pages: Array<{ title: string; slug: string }>;
};

export const getStaticProps: GetStaticProps = async (props) => {
  const tag = props.params?.tag;
  
  return {
    props: {
      tagName: tag,
      // @ts-ignore
      pages: tagmap[tag as {[s:string]: { title: string; slug: string }[]}],
    } as Props,
  };
};

export default (props: Props) => {
  return (
    <>
      <Head>
        <title>
          {props.tagName} - {ssgConfig.siteName}
        </title>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ssgConfig.gtag}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ssgConfig.gtag}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <Layout config={ssgConfig}>
        <TagPage tagName={props.tagName} pages={props.pages} />
      </Layout>
    </>
  );
};
