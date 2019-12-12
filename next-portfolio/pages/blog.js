import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({slug, title }) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title} post</a>
      </Link>
    </li>
  );
};
const blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug= 'react-post' title="React" />
        <PostLink slug= 'react-post' title="Angular" />
        <PostLink slug= 'react-post' title="Vue" />
      </ul>
    </Layout>
  );
};

export default blog;
