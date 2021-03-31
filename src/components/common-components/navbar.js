import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FaFileMedical, FaHeart, FaUser } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';

import './navbar.styles.scss';

export default function NavbarBottom() {
  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-item">
          <Link to="/vaccineList">
            {' '}
            <FaFileMedical />
            <br />
            Vaccine Report
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/accessLog">
            {' '}
            <AiOutlineBars />
            <br />
            Activity Log
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/symptoms">
            {' '}
            <FaHeart />
            <br />
            <span className="nav-item-name">Symptoms</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/profile">
            {' '}
            <FaUser />
            <br />
            Profile
          </Link>
        </div>
      </nav>
    </>
  );
}
