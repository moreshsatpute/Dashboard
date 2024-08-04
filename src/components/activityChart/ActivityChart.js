import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ActivityChart = () => {
    const dataValues = [5000, 10000, 7000, 5000, 12000, 8000, 6000, 5000, 4000, 3000, 5000, 6000, 7000, 8000, 5000, 4000, 3000, 6000, 7000, 10000, 14000, 13000, 10000, 9000, 7000, 6000, 5000];

    const data = {
        labels: Array.from({ length: 27 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Activity',
                data: dataValues,
                backgroundColor: dataValues.map(value => {
                    if (value > 10000) {
                        return '#FF6384'; // High - Red
                    } else if (value > 5000) {
                        return '#FFCE56'; // Medium - Yellow
                    } else {
                        return '#36A2EB'; // Low - Blue
                    }
                }),
                borderRadius: 10,
                barPercentage: 0.6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y.toLocaleString();
                        }

                        const prevValue = context.dataIndex > 0 ? dataValues[context.dataIndex - 1] : null;
                        if (prevValue !== null) {
                            const change = context.parsed.y - prevValue;
                            if (change > 0) {
                                label += ` (↑ ${change.toLocaleString()})`;
                            } else if (change < 0) {
                                label += ` (↓ ${Math.abs(change).toLocaleString()})`;
                            }
                        }

                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5000,
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '400px', padding: '20px', boxSizing: 'border-box' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ActivityChart;
