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
        <div className="tag_box">
          <TagList tags={Object.keys(tagmap)} />
        </div>
      </Layout>
    </>
  );
};
