import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';

interface TicketCardProps {
  ticketNumber: string;
  status: 'waiting' | 'serving' | 'completed' | 'cancelled';
  serviceName?: string;
  timestamp?: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ 
  ticketNumber, 
  status, 
  serviceName = 'General Service',
  timestamp 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'serving':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'waiting':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'completed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'serving': return 'Now Serving';
      case 'waiting': return 'Waiting';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all hover:scale-[1.02] duration-300">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaTicketAlt className="text-white/80" />
          <span className="font-medium text-sm opacity-90">Your Ticket</span>
        </div>
        {timestamp && <span className="text-xs opacity-75">{timestamp}</span>}
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col items-center justify-center text-center">
        <h3 className="text-gray-500 font-medium text-sm uppercase tracking-wider mb-2">
          {serviceName}
        </h3>
        
        <div className="text-7xl font-bold text-gray-900 tracking-tight mb-6 font-mono">
          {ticketNumber}
        </div>

        <div className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide border ${getStatusColor(status)}`}>
          {getStatusLabel(status)}
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="h-2 bg-gray-50 w-full flex">
        <div className={`h-full w-full ${status === 'serving' ? 'bg-green-500 animate-pulse' : 'bg-transparent'}`}></div>
      </div>
    </div>
  );
};

export default TicketCard;
