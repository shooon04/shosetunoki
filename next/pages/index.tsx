// @ts-nocheck
import Head from "next/head";
import { Layout, PageList, TagList } from "../lib/amdxg-components";
import pages from "../gen/pages.json";
import ssgConfig from "../amdxg.config";
import tagmap from "../gen/tagmap.json";

export const config = { amp: false };

export default () => {
  return (
    <>
      <Head>
        <title>{ssgConfig.siteName}</title>
        <link rel="canonical" href={ssgConfig.host} />
      </Head>
      <Layout config={ssgConfig}>
        <div className="pb80 sp-pb60">
          <h2 className="post_list_title">タグ一覧</h2>
          <TagList tags={Object.keys(tagmap)} />
        </div>
        <div>
          <h2 className="post_list_title">記事一覧</h2>
          <PageList pages={pages as any} />
        </div>
      </Layout>
    </>
  );
};
