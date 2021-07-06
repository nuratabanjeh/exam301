import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export class Header extends Component {
    render() {
        return (
            <>
  <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">cocktail App</Navbar.Brand>
    <Link to="/">Home</Link>
    <Link to="/fav">My Fav</Link>

     
    
  
  </Navbar>
  </>
        )
    }
}

export default Header
