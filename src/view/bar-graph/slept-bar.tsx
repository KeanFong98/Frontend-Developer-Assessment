import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { hoursSleptType } from '../../types/types';

interface BarProp {
  blue: string
  purple: string
}

const ChartjsBarChart = (props: BarProp) => {
  const { blue, purple } = props;

  const hrsSlept: hoursSleptType[] = [
    {
      monday: 510,
      tuesday: 420,
      wednesday: 480,
      thursday: 540,
      friday: 600,
      saturday: 660,
      sunday: 720,
    }
  ]; 

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    animation: { duration: 500 },
    scales: {
      x: {
          grid: {
              color: "rgba(0, 0, 0, 0)",
          }
      },
      y: {
          grid: {
              color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
                display: false,
          }
      }
  },
    plugins: {
      legend: { display: false },
    },  
  };

  const data: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        maxBarThickness: 20,
        backgroundColor: [blue, purple, blue, purple, blue, purple, blue],
        borderColor: 'transparent',
        borderRadius: { topRight: 15, topLeft: 15 },
        data: Object.values(hrsSlept[0]), // Using sample data directly
      },
    ],
  };

  return (
    <Card>
      <CardHeader
        title='Activity Progress' 
        style={{
          fontSize: '12px'
        }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] },
        }}
      />
      <CardContent>
        <Bar data={data} height={250} options={options} />
      </CardContent>
    </Card>
  );
};

export default ChartjsBarChart;