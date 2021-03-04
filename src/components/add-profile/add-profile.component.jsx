import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import { CustomButtonWithBorder } from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './add-profile.styles.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      identificationType: '',
      countryOfIssue: '',
      identificationNumber: '',
      lastName: '',
      firstName: '',
      birthDate: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {
      email,
      identificationType,
      countryOfIssue,
      identificationNumber,
      lastName,
      firstName,
      birthDate,
    } = this.state;

    // if (password !== confirmedPassword) {
    //   // eslint-disable-next-line no-alert
    //   alert("passwords don't match");
    //   return;
    // }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //   await createUserProfileDocument(user);
    //   this.setState();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      identificationType,
      countryOfIssue,
      identificationNumber,
      lastName,
      firstName,
      birthDate,
    } = this.state;

    return (
      <div className="add-profile">
        <div className="title">Add Profile</div>
        <form className="add-profile-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="identificationType"
            name="identificationType"
            value={identificationType}
            onChange={this.handleChange}
            label="Identification/Document Type"
            required
          />
          <FormInput
            type="countryOfIssue"
            name="countryOfIssue"
            value={countryOfIssue}
            onChange={this.handleChange}
            label="Country of Issue"
            required
          />
          <FormInput
            type="identificationNumber"
            name="identificationNumber"
            value={identificationNumber}
            onChange={this.handleChange}
            label="Identification/Document Number"
            required
          />

          <FormInput
            type="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            label="Surname"
            required
          />
          <FormInput
            type="firstName"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            label="First Name"
            required
          />
          <FormInput
            type="birthDate"
            name="birthDate"
            value={birthDate}
            onChange={this.handleChange}
            label="Date of Birth"
            required
          />

          <CustomButtonWithBorder type="submit">Register Profile</CustomButtonWithBorder>
        </form>
      </div>
    );
  }
}

export default SignUp;
