import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaPowerOff } from 'react-icons/fa';
import { SiMicrosoftedge } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { RiBarChartBoxLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const iconSize = '1.5em'; // Adjust this value to change the icon size

const Sidebar = () => (
    <Nav className="bg-dark d-flex flex-column justify-content-between" style={{ width: '60px', height: '100vh', position: 'fixed', top: '0', padding: '10px 0', zIndex: 1000 }}>
        <div>
            <Nav.Item>
                <Nav.Link href="#menu" className="d-flex justify-content-center mt-2">
                    <SiMicrosoftedge style={{ color: 'blue', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
        </div>

        <div className='mt-4'>
            <Nav.Item>
                <Nav.Link href="#home" className="d-flex justify-content-center p-1 mt-3">
                    <IoMdHome style={{ color: 'white', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#orders" className="d-flex justify-content-center p-1 mt-3">
                    <RiBarChartBoxLine style={{ color: 'white', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#customers" className="d-flex justify-content-center p-1 mt-3">
                    <FiShoppingBag style={{ color: 'white', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#products" className="d-flex justify-content-center p-1 mt-3">
                    <CiWallet style={{ color: 'white', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#customers" className="d-flex justify-content-center p-1 mt-3">
                    <IoBagCheckOutline style={{ color: 'white', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
        </div>
        <div className="mt-auto">
            <Nav.Item>
                <Nav.Link href="#power" className="d-flex justify-content-center">
                    <FaPowerOff style={{ color: 'white', fontSize: iconSize }} />
                </Nav.Link>
            </Nav.Item>
        </div>
    </Nav>
);

export default Sidebar;
