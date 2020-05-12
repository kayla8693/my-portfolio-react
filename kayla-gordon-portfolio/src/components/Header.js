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
      
      <Navbar className="nav1" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">KAYLA GORDON</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
<NavTabs>
        {/* <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} /> */}
                </NavTabs>
          {/* <Nav className="ml-auto">
            <Nav.Link>
              <Link 
              to="/" 
              className={
                window.location.pathname === "/" || window.location === "about"
              ? "nav-link active" 
              : "nav-link"
              }
              >
                About
                </Link>
            </Nav.Link>
            <Nav.Link>
              <Link 
              to="/portfolio" 
              className=
              {window.location.pathname === "/portfolio" 
              ? "nav-link active" 
              : "nav-link"
              }
              >
                Portfolio
                </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
              Contact
              </Link>
              </Nav.Link>

          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
    // </Router>
  )
}

export default Header;