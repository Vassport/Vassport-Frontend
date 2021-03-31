import React from 'react';
import { CustomButtonNoBorder } from '../../components/custom-button/custom-button.component';
import SignIn from '../../components/sign-in/sign-in.component';
import logo from '../../assets/Vassport_Logo_nobackground.png';
import './signInPage.styles.scss';

const SignInPage = () => (
  <div className="sign-in">
    <img src={logo} alt="logo" />
    <SignIn />
    <CustomButtonNoBorder link="/signin">Forget Password?</CustomButtonNoBorder>
    <div className="create-account">
      <div className="info">Don't have an account?</div>
    <CustomButtonNoBorder link="/signup">Create account</CustomButtonNoBorder>
    </div>
  </div>
);

export default SignInPage;
