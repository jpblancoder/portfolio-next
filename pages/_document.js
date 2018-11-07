import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html lang="en-us">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" href="/static/favicons/touchicon.png" />
          <link rel="icon" href="/static/favicons/favicon.png" />
          <meta name="msapplication-TileImage" content="/static/favicons/tileicon.png" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Merriweather:400,700" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
