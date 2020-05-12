import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
// import Header from "./Header";
// import NavTabs from "./NavTabs";

function ContentBox() {
    return (
        <Router>
            <div className="col-sm-11" id="contentBox">
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    );

};

export default ContentBox;