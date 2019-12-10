import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* can't include title it's added page by page or component basis */}
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: "Lilita One", cursive;
          }
        `}</style>
      </html>
    );
  }
}

export default MyDocument;
