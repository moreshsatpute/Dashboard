import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const StatsCard = ({ title, count, icon, change, changeColor }) => {
  const changeArrow = change.startsWith('-') ? <BsArrowDown /> : <BsArrowUp />;
  const changeTextColor = change.startsWith('-') ? 'danger' : 'success';

  return (
    <Card bg="dark" text="white" className="mb-2 " style={{ height: "90%" }}>
      <Card.Body className="d-flex align-items-center p-2">
        <Row className="w-100">
          <Col xs={9} className="d-flex flex-column align-items-start" style={{textShadow: '2px 2px 15px rgba(255, 255, 255, 0.7)'}}>
          <div className="d-flex align-items-center justify-content-center  " style={{ width: "40px", height: "30px",textShadow: '2px 2px 15px rgba(255, 255, 255, 0.7)'}}>
            {icon}
          </div>
            <Card.Title className="mb-1 font-weight-bold" style={{ fontSize: "0.5rem" }}>{title}</Card.Title>
            <Card.Text className=" font-weight-bold" style={{ fontSize: "1.8rem" }}>{count}</Card.Text>
          </Col>
          <Col xs={3} className="d-flex align-items-center justify-content-end" style={{textShadow: '2px 2px 15px rgba(255, 255, 255, 0.7)'}}>
            <Card.Text className={`text-${changeTextColor} m-0 d-flex align-items-center`} style={{ fontSize: "1rem", fontWeight: 'bold',  }}>
              {changeArrow} {change}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
