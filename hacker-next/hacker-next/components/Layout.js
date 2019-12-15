import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

const Layout = ({ children, title, description, backButton }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <nav>
          {backButton && (
            // back button with Router
            <span onClick={() => Router.back()} className="back-button">
              &#x2b05;
            </span>
          )}
          <Link href="/">
            <a>
              <span className="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>
      <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: #f6f6ef;
          }
          nav {
            background: #f60;
            padding: 1rem;
          }
          nav > * {
            display: inline-block;
            color: black;
          }
          nav a {
            text-decoration: none;
          }
          nav .main-title {
            font-weight: bold;
          }
          nav .back-button {
            font-size: 1.2rem;
            padding-right: 1rem;
            cursor:pointer;
          }
        `}
      </style>
      <style global jsx>{`
          body {
            background: white;
            font-family: Verdana, Geneva, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
