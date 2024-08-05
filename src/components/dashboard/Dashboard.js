import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsCartFill, BsBagCheckFill, BsBagXFill, BsGraphUp } from 'react-icons/bs';
import StatsCard from '../card/StatsCard';
import RecentOrders from '../recentOrders/RecentOrders';
import CustomerFeedback from '../customerFeedback/CustomerFeedback';
import NetProfit from '../netProfit/NetProfit';
import ActivityChart from '../activityChart/ActivityChart';
import CustomList from '../customList/CustomList';
import './Dashboard.css'; // Import the CSS file

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
    <div className="dashboard">
      <Container className="text-white">
        <div className='dashboard-header'>
          <h3 className="font-weight-500">Dashboard</h3>
        </div>
        <Row>
          <Col md={7}>
            <Row>
              {stats.map((stat, index) => (
                <Col key={index} sm={6} lg={3} className="mb-3" style={{ height: "140px" }}>
                  <StatsCard
                    title={stat.title}
                    count={stat.count}
                    icon={stat.icon}
                    change={stat.change}
                    changeColor={stat.changeColor}
                    titleClass="font-weight-600"
                    countClass="font-weight-500"
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <Card bg="dark" text="white" className="mb-3 " style={{ height: "220px" }}>
                  <ActivityChart />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card bg="dark" text="white" className="mb-3" style={{ height: "300px" }}>
                  <Card.Body className="d-flex flex-column h-100">
                    <Card.Title className="font-weight-500">
                      Recent Orders
                    </Card.Title>
                    <div className="flex-grow-1 overflow-auto custom-scrollbar"style={{ maxHeight: "250px" }}>
                      <RecentOrders />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Card bg="dark" text="white" className="mb-3" style={{ height: "140px" }}>
              <Card.Body className="d-flex flex-column h-100">
                <Row className="flex-grow-1">
                  <Col className="d-flex align-items-center">
                    <h6 className="mb-0 font-weight-500">Net Profit</h6>
                  </Col>
                </Row>
                <Row className="flex-grow-1">
                  <Col className="d-flex align-items-center" >
                    <NetProfit />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card bg="dark" text="white" className="mb-3" style={{ height: "220px" }}>
              <Card.Body className="d-flex flex-column h-100">
                <div className="flex-grow-1">
                  <CustomList />
                </div>
              </Card.Body>
            </Card>
            <Card bg="dark" text="white" className="mb-3" style={{ height: "300px" }}>
              <Card.Body className="d-flex flex-column h-100">
                <Card.Title className="font-weight-500">
                  Customer's Feedback
                </Card.Title>
                <div className="flex-grow-1 overflow-auto custom-scrollbar" style={{ maxHeight: "250px" }}>
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
