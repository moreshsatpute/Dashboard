import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import {  FaHamburger } from 'react-icons/fa';
import { BiDish } from "react-icons/bi";


import { TfiTarget } from "react-icons/tfi";



import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const CustomList = () => {
    const items = [
        { icon: < TfiTarget />, text: 'Goals', color: 'bg-danger' },
        { icon: <FaHamburger />, text: 'Popular Dishes', color: 'bg-primary' },
        { icon: <BiDish />, text: 'Menus', color: 'bg-info' },
    ];

    return (
        <Container>
            {items.map((item, index) => (
                <Card className="bg-dark text-white " key={index}>

                    <Row className="align-items-center">
                        <Col xs={2} className="d-flex justify-content-center">
                            <div className={`d-flex justify-content-center align-items-center m-1 ${item.color} rounded-circle`} style={{ width: '40px', height: '40px' }}>
                                {item.icon}
                            </div>
                        </Col>
                        <Col xs={8}>
                            <h6>{item.text}</h6>
                        </Col>
                        <Col xs={2} className="text-right">
                            <span
                                className="d-inline-flex align-items-center justify-content-center"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    backgroundColor: '	#404040', // Light white background color
                                    color: '#ffffff', // Dark color for the text
                                    fontSize: '20px', // Adjust font size as needed
                                    lineHeight: '20px' // Center text vertically
                                }}
                            >
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </Col>
                    </Row>

                </Card>
            ))}
        </Container>
    );
};

export default CustomList;
