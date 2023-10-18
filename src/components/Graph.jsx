import React from 'react'
import { Chart, ArcElement } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

const Graph = () => {
    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
        datasets: [
            {
                label: 'Bargraph',
                borderRadius: 5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 65, 59]
            }
        ]
    };
    const state = {
        datasets: [
            {
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000'
                ],
                data: [65, 59, 80]
            }
        ]
    }

    return (
        <div className='graphs'>
            <div className="barGraph">
                <div className="barText">
                    <h2>Overview</h2>
                    <select className='barOptions'>
                        <option value="quaterly">quaterly</option>
                        <option value="month">monthly</option>
                    </select>
                </div>
                <Bar className='bar' data={data}
                    options={{
                        title: {
                            display: true,
                            text: 'Monthly Earning',
                            fontSize: 20
                        }, scales: {
                            x: {
                                grid: {
                                    display: false
                                }
                            },
                            y: {
                                grid: {
                                    display: false
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="pieGraph">
                <div className="pieText">
                    <h3>Customers</h3>
                    <p>customers that buy products</p>
                </div>
                <div className="piechart">
                    {/* <div className="piechartDetail">
                        <span>65%</span>
                        <p>Total new customers</p>
                    </div> */}
                    <Doughnut
                        data={state}
                        options={{
                            title: {
                                display: true,
                                text: 'Product Sell',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Graph
