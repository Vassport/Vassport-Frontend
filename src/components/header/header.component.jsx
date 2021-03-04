import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';

import './header.styles.scss';

const Header = ({ heading }) => (
  <div className="header-container">
    <div className="header-inside-container">
      <IoIosArrowBack className="header-back" size={40} color="#0c536b" />
      <h3 className="header-heading">{heading}</h3>
      <AiOutlineHome className="header-home" size={40} color="#0c536b" />
    </div>
  </div>
);

export default Header;
