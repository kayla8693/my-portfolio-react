import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header fixed="top" />
        <Main />
        <Route exact path="/mail" component={null} />

        <Footer />
      </Router>
    </>
  );
}

export default App;
