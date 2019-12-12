import Layout from "../components/Layout";

const post = ({url}) => {
  return (
    <Layout title={url.query.title}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        accusamus dolores quia laudantium deleniti amet aut praesentium animi
        saepe, labore impedit nisi fugiat quam enim vitae id! Minima, aut
        similique?
      </p>
    </Layout>
  );
};

export default post;
