import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (

            <Navbar collapsOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >exam App</Navbar.Brand>


                <Link to="/">Home</Link>
                <Link to="/fav">Fav</Link>


            </Navbar>
        )
    }
}

export default Header;
