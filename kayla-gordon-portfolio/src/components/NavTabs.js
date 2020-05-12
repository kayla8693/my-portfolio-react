import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";


function NavTabs() {
    // const location = useLocation();

    return (
        <BrowserRouter>
            <Nav className="ml-auto">
                {/* <Nav.Link> */}
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
                {/* </Nav.Link> */}
                {/* <Nav.Link> */}
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
                {/* </Nav.Link> */}
                {/* <Nav.Link> */}
                    <Link
                        to="/contact"
                        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
          </Link>
                {/* </Nav.Link> */}

            </Nav>
        </BrowserRouter>

    )
}

export default NavTabs;