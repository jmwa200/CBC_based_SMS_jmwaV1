import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Clock } from 'lucide-react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface AttendanceChartProps {
  present: number;
  absent: number;
  late: number;
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ present, absent, late }) => {
  const data = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [
      {
        data: [present, absent, late],
        backgroundColor: [
          '#10B981', // green for present
          '#EF4444', // red for absent
          '#F59E0B', // amber for late
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.formattedValue;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((context.raw / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
  };

  // Calculate total and percentage
  const total = present + absent + late;
  const presentPercentage = total > 0 ? Math.round((present / total) * 100) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock size={18} className="mr-2 text-primary-600" />
          Attendance Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 flex items-center justify-center">
          <Doughnut data={data} options={options} />
          <div className="absolute text-center">
            <div className="text-3xl font-bold">{presentPercentage}%</div>
            <div className="text-sm text-slate-500">Present</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div>
            <div className="text-lg font-semibold">{present}</div>
            <div className="text-sm text-slate-500">Present</div>
          </div>
          <div>
            <div className="text-lg font-semibold">{absent}</div>
            <div className="text-sm text-slate-500">Absent</div>
          </div>
          <div>
            <div className="text-lg font-semibold">{late}</div>
            <div className="text-sm text-slate-500">Late</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceChart;