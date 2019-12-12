import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="Error">
      {statusCode ? (
        `Could not load your data status code: ${statusCode}`
      ) : (
        <p>Couldn't get that page</p>
      )}
    </Layout>
  );
};

export default _error;
