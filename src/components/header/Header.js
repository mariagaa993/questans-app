import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

const Header = () => {
  	return (
        <Navbar collapseOnSelect expand="lg" className="header">
            <Navbar.Brand>
                <img 
                    alt="Logo"
                    src={Logo}
                    width="130"
                    height="80"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">         
                <Nav className="nav-text ml-auto">
                    <Nav.Link>Log in</Nav.Link>
                    <Nav.Link>Sign in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  	);
}

export default Header;
