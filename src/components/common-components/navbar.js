import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFileMedical, FaHeart, FaUser } from 'react-icons/fa';
import { IoFlower } from 'react-icons/io5';
import { AiOutlineBars } from 'react-icons/ai';

export default function NavbarBottom() {
  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-item">
          <a href="/vaccine-list">
            {' '}
            <FaFileMedical />
            <br />
            Vaccine Report
          </a>
        </div>
        <div className="nav-item">
          <a href="/access-log">
            {' '}
            <AiOutlineBars />
            <br />
            Access Log
          </a>
        </div>
        <div className="nav-item">
          <a href="/symptoms">
            {' '}
            <FaHeart />
            <br />
            <span className="nav-item-name">Symptoms</span>
          </a>
        </div>
        <div className="nav-item">
          <a href="/profile">
            {' '}
            <FaUser />
            <br />
            Profile
          </a>
        </div>
      </nav>
    </>
  );
}
