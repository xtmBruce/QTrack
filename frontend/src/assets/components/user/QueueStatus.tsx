import React from "react";
import  { FiClock, FiUsers} from 'react-icons/fi';


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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FiUsers className="text-blue-600" />
        Live Queue Status
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
          <p className="text-sm text-gray-600 mb-2 font-medium">Now Serving</p>
          <p className="text-4xl font-bold text-blue-600">{currentTicket}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiUsers className="text-gray-400" />
              <p className="text-sm text-gray-600">In Queue</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{totalInQueue}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiClock className="text-gray-400" />
              <p className="text-sm text-gray-600">Avg. Wait</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{averageWaitTime}m</p>
          </div>
        </div>
        
        {nextTickets.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-600 mb-3">Up Next</p>
            <div className="flex gap-2 flex-wrap">
              {nextTickets.map((ticket) => (
                <span key={ticket} className="px-4 py-2 bg-gray-100 rounded-lg font-semibold text-gray-700">
                  {ticket}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueueStatus; 