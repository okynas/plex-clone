import React, { Component } from "react";
import Login from "../components/login";
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';

import '../styles/login.css';

export default class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {value : ""}

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(event) {

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
          </section>

        </div>
      </div>

      <form onSubmit={this.handleSubmit}>

      </form>
      </>
    );
  }
  // return(
  // <Login.Container>
  //   <Login.Logo src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"/>

  //   <Login.Wrapper>
  //     <Login.Title text="Account Sign in" />
  //     {/* <Login.SubTitle text="" /> */}

  //     <Login.Section>
  //       <Login.Button src="#google" icon={} text="Continue with Google" color="#DE4C38" />
  //       <Login.Button src="#facebook" icon={<FaFacebook/>} text="Continue with Facebook" color="#4267B2" />
  //       <Login.Button src="#apple" icon={<FaApple/>} text="Continue with Apple" color="#000000" />
  //     </Login.Section>


  //     <Login.Splitter text="or"/>

  //     <Login.Form>
  //       <Login.InputBox>
  // h4         <Login.SubTitle text="Email or Username"/>
  //         <Login.Input type="text"/>
  //       </Login.InputBox>
  //       <Login.InputBox>
  //         <Login.SubTitle text="Password"/>
  //         <Login.Input type="password"/>
  //       </Login.InputBox>

  //       <Login.Submit text="Sign In" color="#E5A00B" />
  //     </Login.Form>

  //     {/* div text-wrapper */}
  //       {/* text */}
  //       {/* text 2 */}
  //     {/* div text-wrapper */}

  //     </Login.Wrapper>
    
  // </Login.Container>
  // );
}