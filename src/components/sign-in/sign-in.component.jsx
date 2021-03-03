import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import { CustomButtonWithBorder } from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import { signIn } from '../../common/user.reducer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log({ email, password });
      dispatch(signIn(email, password));
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      default:
        setPassword(value);
    }
  };
  return (
    <div className="sign-in">
      <div className="title"> Log In to Vassport</div>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="button">
          <CustomButtonWithBorder type="submit">Log In</CustomButtonWithBorder>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
