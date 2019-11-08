import React from "react";

import "./sign-in.styles.scss";
// SignIn class contains users email and password as a states
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <lable>Email</lable>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <lable>Password</lable>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
