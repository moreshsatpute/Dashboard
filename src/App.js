import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Header />
      <Container fluid style={{ paddingTop: '60px' }}>
        <Row>
          <Col md={1} style={{ padding: 0, width: '3px' }}>
            <Sidebar />
          </Col>
          <Col md={11} style={{  }}>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
