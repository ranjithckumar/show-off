import React from "react";
import InputForm from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
          <InputForm
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            lable='email'
            required
          />
          <lable>Email</lable>
          <InputForm
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            lable='password'
            required
          />
         <div className='buttons'>

         </div>
         <CustomButton type="submit" >
              Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {''}
           Sign in with google{''}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
