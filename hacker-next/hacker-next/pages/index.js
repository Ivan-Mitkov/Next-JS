import Head from "next/head";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from '../components/StoryList';

class Home extends React.Component {
  static async getInitialProps() {
    let stories = null;
    try {
      const response = await fetch(
        "https://node-hnapi.herokuapp.com/news?page=1"
      );
      stories = await response.json();
    } catch (e) {
      console.log(e);
      stories = [];
    }
    return { stories };
  }

  render() {
    const { stories } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Hacker Next</h1>
       <StoryList stories={stories}/>
      </div>
    );
  }
}

export default Home;
