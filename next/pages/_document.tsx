import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import css from "!!raw-loader!../styles/globals.css";
import { ServerStyleSheet } from "styled-components";
import ssgConfig from "../amdxg.config";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    try {
      const page = ctx.renderPage((App: any) => (props: any) =>
        sheet.collectStyles(<App {...props} />)
      );
      const initialProps: any = await Document.getInitialProps(ctx);
      return {
        ...page,
        styles: [
          ...initialProps.styles,
          <style
            key="custom"
            dangerouslySetInnerHTML={{
              __html: css,
            }}
          />,
          ...sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={ssgConfig.lang || "en-US"}>
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title={ssgConfig.siteName}
            href="/rss.xml"
          />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" />
          {/* <link
            rel="alternate"
            type="application/rss+xml"
            title={ssgConfig.siteName}
            href="sitemap.xml"
          /> */}
        </Head>
        <body>
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
