import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const TimerChart = ({ currentTime }) => {
    const [chartData, setChartData] = useState({
        labels: ['Elapsed Time', 'Remaining Time'],
        datasets: [
        {
            label: 'Time',
            data: [0, 900],
            backgroundColor: ['rgba(192, 75, 75)','rgba(224, 224, 224)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 75, 75, 1)'],
            borderWidth: 1,
        },
        ],
    });

    useEffect(() => {
        const remainingTime = 900 - currentTime;
        setChartData({
        labels: ['Elapsed Time', 'Remaining Time'],
        datasets: [
            {
                label: 'Time',
                data: [currentTime, remainingTime > 0 ? remainingTime : 0],
                backgroundColor: ['rgba(192, 75, 75)','rgba(224, 224, 224)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 75, 75, 1)'],
                borderWidth: 1,
            },
        ],
        });
    }, [currentTime]);

    return (
        <div style={{ width: '400px', height: '400px' }} className="chart">
        <Doughnut data={chartData} />
        </div>
    );
};
