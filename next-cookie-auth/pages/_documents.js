import Document, { Main, Head, NextScrpit } from "next/document";
import { getServerSideToken, getUserScript } from "../lib/auth";

//Document is only rendered in the server
//so we can get the information by placing it where we can read it

export default class MyDocument extends Document {
  //need context ctx to get props of the Document
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const userData = await getServerSideToken(ctx.req);
    //need to return all props of Document not only the cookie and we add userData to props
    return { ...props, ...userData };
  }

  render() {
    const { user = {} } = this.props;
    return (
      <html>
        <Head></Head>
        <body>
          <Main />
          {/* put userData on the window object */}
          <script
            dangerouslySetInnerHTML={{ __html: getUserScript(user) }}
          ></script>
          <NextScrpit />
        </body>
      </html>
    );
  }
}
