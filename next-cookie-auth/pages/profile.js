import { getUserProfile, authInitialProps } from "../lib/auth";
import Layout from "../components/Layout";

export class Profile extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    // console.log('In CDM')
    getUserProfile().then(user => this.setState({ user }));
  }

  render() {
    // console.log('profile', this.state)
    const { user } = this.state;

    return (
      <Layout title="Profile" {...this.props}>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Layout>
    );
  }
}
Profile.getInitialProps = authInitialProps();
export default Profile;
