import React from 'react';
import { Navbar, Nav, Form, Container, InputGroup } from 'react-bootstrap';
import { FaSearch, FaEnvelope, FaCog, FaBell, FaUser } from 'react-icons/fa';

const Header = () => (
    <Navbar bg="dark" variant="dark" className="fixed-top" style={{ height: '60px', zIndex: 999 }}>
        <Container fluid className="d-flex align-items-center justify-content-between">
            {/* Search Form on the Left */}
            <Form className="d-none d-md-flex align-items-center" style={{ marginLeft: '60px' }}>
                <InputGroup style={{ backgroundColor: '#4e545c', borderRadius: '50px' }}>
                    <InputGroup.Text style={{ backgroundColor: '#4e545c', border: 'none', borderRadius: '50px' }}>
                        <FaSearch color="dark" />
                    </InputGroup.Text>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{ width: '300px', backgroundColor: '#4e545c', color: 'white', border: 'none', borderRadius: '50px' }}
                    />
                </InputGroup>
            </Form>

            {/* Navigation Items on the Right */}
            <Nav className="d-flex align-items-center">
                <Nav.Link href="#messages" className="text-white mx-2 d-md-none">
                    <FaSearch /> {/* Show search icon in mobile view */}
                </Nav.Link>
                <Nav.Link href="#messages" className="text-white mx-2 d-none d-md-block">
                    <FaEnvelope />
                </Nav.Link>
                <Nav.Link href="#settings" className="text-white mx-2 d-none d-md-block">
                    <FaCog />
                </Nav.Link>
                <Nav.Link href="#notifications" className="text-white mx-2 d-none d-md-block">
                    <FaBell />
                </Nav.Link>
                <Nav.Link href="#profile" className="text-white mx-2 d-none d-md-block">
                    <FaUser />
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

export default Header;
