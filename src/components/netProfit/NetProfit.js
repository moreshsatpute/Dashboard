// src/components/NetProfit.js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Container, Col, Row } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

const NetProfit = () => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
    },
  };

  return (
    <Container p-4>
      <Row>
        <Col md={6}>
          <h3>$6759.25</h3>
        </Col>
        <Col md={6} style={{ marginTop: 0 }}>
          <div style={{ width: '80px', height: '80px' }}>
            <Doughnut data={data} options={options} />
          </div>
          <p>*The values here have been rounded off.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NetProfit;
