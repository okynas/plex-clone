import React, { Component } from "react";
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';

import '../style/login.css';

export default class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email : "",
      password: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
  }

  // componentDidMount() {

  // }

  handleSubmit(event) {

    localStorage.setItem('user', JSON.stringify({email: this.state.email, password: this.state.password}))
    window.location.href('/browse')
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleChangePwd(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return(
      <>
      <div className="container">
        <img src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"/>

        <div className="wrapper">
          <h1>Account Sign In</h1>

          <section>
            <a className="button bg-red">
              <FaGoogle/>
              Continue with Google
            </a>

            <a className="button bg-blue">
              <FaFacebook/>
              Continue with Facebook
            </a>

            <a className="button bg-black">
              <FaApple/>
              Continue with Apple
            </a>
          </section>

          <span className="splitter">
            <span className="splitterLeft"></span>
            <span>or</span>
            <span className="splitterRight"></span>
          </span>

          <form onSubmit={this.handleSubmit}>
            <label>
              <span className="subtitle">Email or Username</span>
              <input type="text" placeholder="your-email@gmail.com" value={this.state.email} onChange={this.handleChange}/>
            </label>

            <label>
              <span className="subtitle">Password</span>
              <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChangePwd}/>
            </label>

            <input type="submit" value="Sign In" className="submit"/>
          </form>

          <div className="signup">
            <span>Need an account? Press the Google, Facebook, or Apple buttons above, or 
              <a href="#">sign up with email</a>
            </span>
          </div>

          <div className="terms-of-service">
            <span>By creating an account or continuing to use a Plex application, website, 
              or software, you acknowledge and agree that you have accepted the 
              <a href="#">Terms of Service</a>
              and have reviewed the <a href="#">Privacy Policy</a>.
            </span>
          </div>

        </div>
      </div>
      </>
    );
  }
}