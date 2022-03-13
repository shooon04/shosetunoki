// @ts-nocheck
/* eslint-disable */
import Head from "next/head";
import { Layout, TagList } from "../../../lib/amdxg-components";
import ssgConfig from "../../../amdxg.config";
import tagmap from "../../../gen/tagmap.json";

export const config = { amp: false };

export default () => {
  return (
    <>
      <Head>
        <title>タグ一覧 - {ssgConfig.siteName}</title>
      </Head>
      <Layout config={ssgConfig}>
        <div className="tag_box">
          <TagList tags={Object.keys(tagmap)} />
        </div>
      </Layout>
    </>
  );
};
