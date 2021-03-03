import React from 'react';

import './custom-button.styles.scss';

export const CustomButtonWithBorder = ({ type, children }) => (
  <button type={type} className="custom-button-border">
    {children}
  </button>
);

export const CustomButtonNoBorder = ({ type, children }) => (
  <button type={type} className="custom-button-no-border">
    {children}
  </button>
);
