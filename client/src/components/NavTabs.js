import React from "react";
import { Link, useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";


function NavTabs() {
    const location = useLocation();

    return (
        // <BrowserRouter>
        <Nav className="ml-auto">
            <Link
                to="/"
                className={
                    location.pathname === "/" === "about"
                        ? "nav-link active"
                        : "nav-link"
                }
            >
                About
            </Link>
            <Link
                to="/portfolio"
                className=
                {location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
            >
                Portfolio
            </Link>
            <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
                Contact
          </Link>
        </Nav>
    );
};

export default withRouter(NavTabs);