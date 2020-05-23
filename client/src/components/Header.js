import React from 'react';
import { Navbar } from "react-bootstrap";
import NavTabs from "./NavTabs";

function Header() {

  return (
    <header>
      <Navbar className="nav1" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="name">KAYLA GORDON</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavTabs />

        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;