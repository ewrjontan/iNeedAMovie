import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
//import GetInterests from './components/GetInterestsComponent';
//import FeelingLucky from './components/FeelingLuckyComponent';
import Footer from './components/FooterComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar dark>
            <div className="container">
              <NavbarBrand className="mx-auto" href="/"><h1>I Need A Movie</h1></NavbarBrand>
            </div>
          </Navbar>

          <Home />
          
          <Footer />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
