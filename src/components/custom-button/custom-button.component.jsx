import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

export const CustomButtonWithBorder = ( { type, children }) => (
    <button type={type} className="custom-button-border">
      {children}
    </button>
);

export const CustomButtonNoBorder = ({ link, type, children }) => (
    <button type={type} className="custom-button-no-border">
      <Link to={link}>
        {children}
      </Link>
    </button>
);
