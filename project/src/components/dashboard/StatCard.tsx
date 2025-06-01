import React, { ReactNode } from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'primary' | 'secondary' | 'warning' | 'danger';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  variant = 'primary' 
}) => {
  const variantClasses = {
    primary: 'text-primary-600 bg-primary-50',
    secondary: 'text-secondary-600 bg-secondary-50',
    warning: 'text-warning-600 bg-warning-50',
    danger: 'text-danger-600 bg-danger-50',
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${variantClasses[variant]}`}>
            {icon}
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
          </div>
        </div>
        
        {trend && (
          <div className="mt-4">
            <div className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-danger-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              <span className="text-slate-500 ml-1">from last month</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;