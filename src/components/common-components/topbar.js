import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFileMedical, FaHeart, FaUser } from 'react-icons/fa';
import { IoFlower } from 'react-icons/io5';
import { AiOutlineBars, AiOutlineLeft, AiTwotoneHome } from 'react-icons/ai';

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <AiOutlineLeft /> <span>Vaccination List</span> <AiTwotoneHome />
      </div>
    </>
  );
}
