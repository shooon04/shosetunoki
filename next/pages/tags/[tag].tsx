import Head from "next/head";
import { Layout, TagPage } from "../../lib/amdxg-components";
import { GetStaticProps } from "next";
import ssgConfig from "../../amdxg.config";
import tagmap from "../../gen/tagmap.json";

export const config = { amp: true };

export function getStaticPaths() {
  const paths = Object.keys(tagmap).map((tag) => {
    return `/tags/${tag}`;
  });
  return {
    paths,
    fallback: false,
  };
}

type Props = {
  tagName: string;
  pages: Array<{ title: string; slug: string }>;
};

export const getStaticProps: GetStaticProps = async (props) => {
  const tag = props?.params?.tag;
  const tagmap = [tag as any];
  return {
    props: {
      tagName: tag,
      pages: tagmap,
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
      </Head>
      <Layout config={ssgConfig}>
        <TagPage tagName={props.tagName} pages={props.pages} />
      </Layout>
    </>
  );
};
