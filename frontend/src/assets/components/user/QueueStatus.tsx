import React from "react";
import { FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';

interface QueueStatusProps {
  currentTicket: string;
  totalInQueue: number;
  averageWaitTime: number;
  nextTickets: string[];
}

const QueueStatus: React.FC<QueueStatusProps> = ({
  currentTicket,
  totalInQueue,
  averageWaitTime,
  nextTickets
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FiUsers className="w-5 h-5 text-blue-600" />
          </div>
          Live Queue Status
        </h2>
      </div>
      
      <div className="p-6 space-y-6 flex-1 flex flex-col">
        {/* Now Serving */}
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
          <p className="text-sm font-medium text-blue-700 mb-2">Now Serving</p>
          <p className="text-5xl sm:text-6xl font-bold text-blue-600">
            {currentTicket}
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <FiUsers className="w-4 h-4 text-gray-500" />
              <p className="text-sm text-gray-600">In Queue</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {totalInQueue}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <FiClock className="w-4 h-4 text-gray-500" />
              <p className="text-sm text-gray-600">Avg. Wait</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {averageWaitTime}<span className="text-gray-500 text-lg ml-1">min</span>
            </p>
          </div>
        </div>
        
        {/* Up Next */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-700">Up Next</p>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {nextTickets.length} in line
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {nextTickets.map((ticket, i) => (
              <div 
                key={ticket} 
                className={`px-3 py-2 rounded-lg font-medium text-sm ${
                  i === 0 
                    ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                    : 'bg-gray-50 text-gray-700 border border-gray-200'
                }`}
              >
                {ticket}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;