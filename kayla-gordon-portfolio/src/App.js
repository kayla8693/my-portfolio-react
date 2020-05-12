import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
// import Container from "./comonents/Container";
import Header from "./components/Header";
// import About from "./components/pages/About";
// import Portfolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    // <Router>
    <>
      <Header fixed="top" />

      <Main />
      <Footer />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
