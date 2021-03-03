import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NavbarBottom() {
  const tabs = [
    {
      route: '/home',
      icon: <FaHome />,
      label: 'Home',
    },
    {
      route: '/search',
      //   icon: <FaSearch />,
      label: 'Search',
    },
    {
      route: '/login',
      //   icon: <FaUserCircle />,
      label: 'Login',
    },
  ];

  return (
    <Navbar fixed="bottom" bg="white" expand="lg">
      <Navbar.Toggle />
      <Navbar className="mr-auto" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/portfolio">home</Nav.Link>
          <Nav.Link href="/contact">settings</Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
}
