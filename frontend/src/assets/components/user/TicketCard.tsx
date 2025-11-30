import React from "react";
import { FiClock, FiUser, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

interface TicketCardProps {
  ticketNumber: string;
  queuePosition: number;
  estimatedWaitTime: number;
  status: 'waiting' | 'ready' | 'called';
  issuedAt: Date;
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticketNumber,
  queuePosition,
  estimatedWaitTime,
  status,
  issuedAt
}) => {
  const statusConfig = {
    waiting: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      icon: <FiClock className="w-5 h-5" />,
      label: 'Waiting in Queue'
    },
    ready: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <FiAlertCircle className="w-5 h-5" />,
      label: 'Almost There!'
    },
    called: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: <FiCheckCircle className="w-5 h-5" />,
      label: 'Your Turn!'
    }
  };

  const { bg, border, text, icon, label } = statusConfig[status];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
      {/* Ticket Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-100 text-sm font-medium mb-1">Your Ticket</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2">
              {ticketNumber}
            </h1>
            <p className="text-blue-100 text-sm">
              Issued at {issuedAt.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
          <div className={`${bg} ${border} ${text} px-4 py-2 rounded-full flex items-center gap-2`}>
            {icon}
            <span className="text-sm font-medium">{label}</span>
          </div>
        </div>
      </div>
      
      {/* Ticket Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm font-medium mb-1">Position</p>
            <p className="text-2xl font-bold text-gray-900">#{queuePosition}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm font-medium mb-1">Ahead of You</p>
            <p className="text-2xl font-bold text-gray-900">{queuePosition - 1}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-500 text-sm font-medium">Estimated Wait Time</p>
            <FiClock className="w-4 h-4 text-gray-400" />
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500" 
              style={{ 
                width: `${Math.min(100, 100 - ((queuePosition - 1) / 20 * 100))}%` 
              }}
            />
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">
            ~{estimatedWaitTime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;