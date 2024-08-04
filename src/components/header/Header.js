import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (

    <Navbar bg="dark" variant="dark" className="fixed-top" style={{ height: '60px' }}>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
    </Navbar >
);

export default Header;
