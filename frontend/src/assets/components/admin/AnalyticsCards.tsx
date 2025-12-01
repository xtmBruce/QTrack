import React from 'react';
import { FaUsers, FaClock, FaCheckCircle, FaChartLine } from 'react-icons/fa';

interface AnalyticsCardsProps {
  totalServed: number;
  avgWaitTime: number;
  pendingCount: number;
}

const AnalyticsCards: React.FC<AnalyticsCardsProps> = ({ totalServed, avgWaitTime, pendingCount }) => {
  const cards = [
    {
      title: 'Total Served',
      value: totalServed,
      icon: <FaCheckCircle />,
      color: 'bg-green-100 text-green-600',
      trend: '+12% from yesterday'
    },
    {
      title: 'Avg Wait Time',
      value: `${avgWaitTime}m`,
      icon: <FaClock />,
      color: 'bg-blue-100 text-blue-600',
      trend: '-2m from yesterday'
    },
    {
      title: 'Pending',
      value: pendingCount,
      icon: <FaUsers />,
      color: 'bg-amber-100 text-amber-600',
      trend: 'High traffic'
    },
    {
      title: 'Efficiency',
      value: '94%',
      icon: <FaChartLine />,
      color: 'bg-purple-100 text-purple-600',
      trend: 'Optimal'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${card.color} text-xl`}>
              {card.icon}
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              card.trend.includes('+') || card.trend === 'Optimal' ? 'bg-green-50 text-green-700' : 
              card.trend.includes('-') ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
            }`}>
              {card.trend}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{card.title}</h3>
          <div className="text-3xl font-bold text-gray-900">{card.value}</div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
