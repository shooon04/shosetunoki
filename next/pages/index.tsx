import Head from "next/head";
import { Layout, PageList, TagList } from "../lib/amdxg-components";
import pages from "../gen/pages.json";
import ssgConfig from "../amdxg.config";
import tagmap from "../gen/tagmap.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>{ssgConfig.siteName}</title>
      </Head>
      <Layout config={ssgConfig}>
        <h2>Articles</h2>
        <PageList pages={pages as any} />
        <h2>Tags</h2>
        <TagList tags={Object.keys(tagmap)} />
      </Layout>
    </>
  );
};
