import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import { CustomButtonWithBorder } from '../custom-button/custom-button.component';

import { signUp } from '../../common/user.reducer';

import './sign-up.styles.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      // eslint-disable-next-line no-alert
      alert("passwords don't match");
      return;
    }

    dispatch(signUp(email, password));
    setEmail('');
    setPassword('');
    setPassword2('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;
      default:
    }
  };

  return (
    <div className="sign-up">
      <div className="title">Create an account</div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="password2"
          value={password2}
          onChange={handleChange}
          label="Confirmed Password"
          required
        />
        <CustomButtonWithBorder type="submit">Create Account</CustomButtonWithBorder>
      </form>
    </div>
  );
};

export default SignUp;
