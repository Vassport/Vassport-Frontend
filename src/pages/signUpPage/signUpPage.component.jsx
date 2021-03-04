import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkLogin } from '../../common/user.reducer';
import SignUp from '../../components/sign-up/sign-up.component';

import './signUpPage.styles.scss';

const SignUpPage = () => {
  return (
    <div className="sign-up">
      <div className="heading">Welcome to Vassport</div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
