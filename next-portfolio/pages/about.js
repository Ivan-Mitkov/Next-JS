import Layout from "../components/Layout";

const About = () => {
  const styling = {
    backgroundColor: "red",
    backgroundImage: "url('/static/js-logo.png')",
    width: "300px",
    height: "300px"
  };
  return (
    <Layout title="About">
      <div>
        <p>Something about me</p>
        <img src="static/js-logo.png" alt="Javascript Logo" height="200px" />

        <div style={styling}> Javascript</div>
      </div>
    </Layout>
  );
};

export default About;
