import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaTachometerAlt ,FaShoppingCart, FaBox, FaUser  } from 'react-icons/fa';


const Sidebar = () => (
    <Nav className="bg-dark" style={{ width: '60px', height: '100vh', position: 'fixed', top: '60px' }}>
        <Nav.Item>
            <Nav.Link href="#home">
                <FaTachometerAlt />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#orders">
                <FaShoppingCart />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#products">
                <FaBox />
                </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#customers"><FaUser /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#customers"><FaUser /></Nav.Link>
        </Nav.Item>
    </Nav>
);

export default Sidebar;
