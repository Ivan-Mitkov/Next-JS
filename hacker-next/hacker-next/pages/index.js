import Link from "next/link";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

class Home extends React.Component {
  static async getInitialProps({ req, res, query }) {
    // console.log('query',query)
    let stories = null;
    let page = 1;
    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (e) {
      console.log(e);
      stories = [];
    }
    return { page, stories };
  }

  render() {
    const { stories, page } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Hacker Next"
        description="A HAcker news clone made with next.js"
      >
        <StoryList stories={stories} />
        <footer>
          {page ===2 ? (
            <>
            
              <Link href={`/?page=${page - 1}`}>
                <a> First Page</a>
              </Link>
            </>
          ) : (
            " "
          )}
         
          {page > 2 ? (
            <>
              <Link href={`/?page=${1}`}>
                <a>First Page</a>
              </Link>
              {">> "}
              <Link href={`/?page=${page - 1}`}>
                <a> {`${page - 1}`}</a>
              </Link>
            </>
          ) : (
            ""
          )}
          {" ... "}
          <Link href={`/?page=${page}`}>
            <a>Current Page {`${page}`}</a>
          </Link>
          {" ... "}
          <Link href={`/?page=${page + 1}`}>
            <a>{`${page + 1}`}</a>
          </Link>
          {">> "}
        </footer>
        <style jsx>{`
          footer {
            padding: 1rem;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
