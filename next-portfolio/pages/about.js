import Layout from "../components/Layout";
import React from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

class About extends React.Component {
  // state = {
  //   user: null
  // };
  //run on client
  // componentDidMount() {
  //   fetch('https://api.github.com/users/Ivan-Mitkov').then(res=>res.json()).then(data=>{
  //   this.setState({user:data})
  //   })
  // }

  //run on server
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/Ivan-Mitkov");
    //dealing with errors
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user,statusCode } = this.props;
    if(statusCode){
      return <Error statusCode={statusCode}/>
    }
    return (
      <Layout title="About">
        <div>
          <p>{user.name}</p>
          <img src={user.avatar_url} alt="Ivan" height="200px" />
        </div>
        {/* <div>{JSON.stringify(this.state.user)}</div> */}
      </Layout>
    );
  }
}

export default About;
