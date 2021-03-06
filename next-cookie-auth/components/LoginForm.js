import Router from "next/router";
import { loginUser } from "../lib/auth";

class LoginForm extends React.Component {
  state = {
    email: "Sincere@april.biz",
    password: "hildegard.org",
    error: "",
    isLoading: false
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showError = err => {
    console.log("Error", err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: true });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ error: "", isLoading: false });
    const { email, password } = this.state;
    // console.log(this.state);
    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch(err => this.showError(err));
  };
  render() {
    const { email, password, error, isLoading } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Sending" : "Submit"}
        </button>
        {error && <div>{error}</div>}
      </form>
    );
  }
}

export default LoginForm;
