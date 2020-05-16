import React from 'react';
import { Navbar } from "react-bootstrap";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
import NavTabs from "./NavTabs";
// import ContentBox from "./ContentBox";


// import { Link, BrowserRouter } from "react-router-dom";

function Header() {
  // const location = useLocation();

  return (
    // <Router>
    <header>

      <Navbar className="nav1" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="name">KAYLA GORDON</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavTabs />

        </Navbar.Collapse>
      </Navbar>
    </header>
    // </Router>
  )
}

export default Header;