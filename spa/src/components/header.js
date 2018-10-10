import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Example React</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/" className="nav-link" activeStyle="active" exact>Home</NavLink>
            </Nav>
        </Navbar>
    );
  }
}

export default Header;

