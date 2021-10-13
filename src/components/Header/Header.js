import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
        return (
<div>
        <img className="logo" src={logo} alt="" />  
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#"><img width="150px" src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
        >
               

                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

</div>
);
};

export default Header;