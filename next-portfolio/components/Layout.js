import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError=()=>NProgress.done()

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Next Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        ></link>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire Me</a>
        </Link>
      </header>
      <div className="root">
        <h1>{props.title}</h1>
        {props.children}
      </div>

      <footer>footer</footer>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 80vh;
        }
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 1rem;
          font-size: 1.2rem;
          background: indigo;
        }
        header a {
          color: darkgrey;
          text-decoration: none;
        }
        header a:hover {
          font-weight: bold;
          color: lightergray;
        }
        footer {
          padding: 2rem;
          height: 4rem;
          background: indigo;
          width: 100%;
        }
      `}</style>
      <style global jsx>{`
          body {
            margin: 0;
            font-size: 16px;
            background: #f0f0f0;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
