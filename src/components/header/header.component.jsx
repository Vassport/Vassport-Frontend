import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import './header.styles.scss';

const Header = ({ heading }) => {
  let history = useHistory();

  const handleClickHome = () => {
    history.push('/');
  };

  const handleClickBack = () => {
    history.goBack();
  };
  return (
    <div className="header-container">
      <div className="header-inside-container">
        <IoIosArrowBack
          onClick={handleClickBack}
          className="header-back"
          size={40}
          color="#0c536b"
        />
        <h3 className="header-heading">{heading}</h3>
        <AiOutlineHome
          onClick={handleClickHome}
          className="header-home"
          size={40}
          color="#0c536b"
        />
      </div>
    </div>
  );
};

export default Header;
