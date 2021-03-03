/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

import './form-input.styles.scss';

// eslint-disable-next-line react/prop-types
const FormInput = ({ id, handleChange, label, ...otherProps }) => (
  <div className="form">
    <label className="form-input-label" htmlFor={id}>
      {label}
    </label>
    <input className="form-input" id={id} onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
