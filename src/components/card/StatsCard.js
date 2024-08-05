import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const StatsCard = ({ title, count, icon, change, changeColor }) => {
  const changeArrow = change.startsWith('-') ? <BsArrowDown /> : <BsArrowUp />;
  const changeTextColor = change.startsWith('-') ? 'danger' : 'success';

  return (
    <Card bg="dark" text="white" className="mb-2" style={{ height: "100%", borderRadius: '10px' }}>
      <Card.Body className="p-2">
        <Row className="w-100">
          <Col xs={12} sm={8} md={8} className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center justify-content-center mb-2" style={{ width: "40px", height: "30px" }}>
              {icon}
            </div>
            <Card.Title className="mb-1 font-weight-bold" style={{ fontSize: "0.75rem" }}>{title}</Card.Title>
            <Card.Text className="font-weight-bold" style={{ fontSize: "1rem" }}>{count}</Card.Text>
          </Col>
          <Col xs={12} sm={4} md={4} className="d-flex align-items-center justify-content-end">
            <Card.Text className={`text-${changeTextColor} m-0 d-flex align-items-center`} style={{ fontSize: "0.875rem", fontWeight: 'bold' }}>
              {changeArrow} {change}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
