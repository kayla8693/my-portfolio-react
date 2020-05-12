import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./comonents/Main";
// import Container from "./comonents/Container";
import Header from "./comonents/Header";
import Footer from "./comonents/Footer";


function App() {
  return (
    <React.Fragment>
      <Header fixed="top" />
      <Main>
      </Main>
      <Footer sticky="bottom" />
    </React.Fragment>

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
