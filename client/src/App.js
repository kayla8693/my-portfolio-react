import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header fixed="top" />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
