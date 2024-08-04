import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsCartFill, BsBagCheckFill, BsBagXFill, BsGraphUp } from 'react-icons/bs';
import StatsCard from '../card/StatsCard';
import RecentOrders from '../recentOrders/RecentOrders';
import CustomerFeedback from '../customerFeedback/CustomerFeedback';
import NetProfit from '../netProfit/NetProfit';
import ActivityChart from '../activityChart/ActivityChart';
import CustomList from '../customList/CustomList';

const Dashboard = () => {
    const stats = [
        {
            title: 'Total Orders',
            count: 75,
            icon: <BsCartFill size={20} color="#6e44ff" />,
            change: '3%',
            changeColor: 'primary'
        },
        {
            title: 'Total Delivered',
            count: 70,
            icon: <BsBagCheckFill size={20} color="#28a745" />,
            change: '-3%',
            changeColor: 'danger'
        },
        {
            title: 'Total Cancelled',
            count: 5,
            icon: <BsBagXFill size={20} color="#dc3545" />,
            change: '3%',
            changeColor: 'success'
        },
        {
            title: 'Total Revenue',
            count: '$12k',
            icon: <BsGraphUp size={20} color="#fd7e14" />,
            change: '-3%',
            changeColor: 'danger'
        }
    ];

    return (
        <div style={{ marginLeft: '60px', marginRight:'-100px'}}>
            <Container className="ml-4 p-4  text-white">
            <div className=' dashboard ml-1 p-1 text-white'>
                <h3>Dashboard</h3>
            </div>
                <Row>
                    <Col md={7}>
                        <Row>
                            {stats.slice(0, 4).map((stat, index) => (
                                <Col key={index} md={3} style={{ height: "150px" }}>
                                    <StatsCard
                                        title={stat.title}
                                        count={stat.count}
                                        icon={stat.icon}
                                        change={stat.change}
                                        changeColor={stat.changeColor}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col>
                                <Card bg="dark" text="white" className="mb-2" style={{ height: "180px" }}>
                                    <ActivityChart />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card bg="dark" text="white" className="mb-2" style={{ height: "270px" }}>
                                    <Card.Body className="d-flex flex-column h-100">
                                        <Card.Title>
                                            Recent Order
                                        </Card.Title>
                                        <div className="flex-grow-1 overflow-auto">
                                            <RecentOrders />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <Card bg="dark" text="white" className="mb-2" style={{ height: "140px" }}>
                            <Card.Body className="d-flex flex-column h-100">
                                <Row className="flex-grow-1">
                                    <Col className="d-flex align-items-center">
                                        <h6 className="mb-0">Net Profit</h6>
                                    </Col>
                                </Row>
                                <Row className="flex-grow-1">
                                    <Col className="d-flex align-items-center">
                                        <NetProfit />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="white" className="mb-2" style={{ height: "180px" }}>
                            <Card.Body className="d-flex flex-column h-100 ">
                                <div className="flex-grow-1">
                                    <CustomList />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="white" className="mb-2" style={{ height: "270px" }}>
                            <Card.Body className="d-flex flex-column h-100 ">
                                <Card.Title>
                                    Customer's Feedback
                                </Card.Title>

                                <div className="flex-grow-1 overflow-auto">
                                    <CustomerFeedback />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
