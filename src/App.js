import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import "./App1.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Container fluid style={{ paddingTop: '60px' }}>
        <Row>
          <Col xs={1} md={1} sm={1} className="p-0 vh-100">
            <Sidebar />
          </Col>
          <Col xs={11} md={11} sm={11} className="p-0">
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
