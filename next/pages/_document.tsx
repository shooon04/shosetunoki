import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import css from "!!raw-loader!../styles/globals.css";
import { ServerStyleSheet } from "styled-components";
import ssgConfig from "../amdxg.config";

export const GA_ID = ssgConfig.gtag ?? '';

export const existsGaId = GA_ID !== '';

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
          <>
            <script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });`,
              }}
            />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
