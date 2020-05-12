import React from 'react';
import { Navbar, Nav } from "react-bootstrap"



// import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">KAYLA GORDON</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="active" href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;