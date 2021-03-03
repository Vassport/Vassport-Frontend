import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import { CustomButtonWithBorder } from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmedPassword: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      // eslint-disable-next-line no-alert
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user);
      this.setState();
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, confirmedPassword } = this.state;

    return (
      <div className="sign-up">
        <div className="title">Create an account</div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="confirmedPassword"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.handleChange}
            label="Confirmed Password"
            required
          />
          <CustomButtonWithBorder type="submit">Create Account</CustomButtonWithBorder>
        </form>
      </div>
    );
  }
}

export default SignUp;
