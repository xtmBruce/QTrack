import React from "react";

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
  const statusStyles = {
    waiting: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    ready: 'bg-green-50 border-green-200 text-green-800',
    called: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const statusText = {
    waiting: 'Waiting',
    ready: 'Ready Soon',
    called: 'Your Turn!'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <p className="text-sm font-medium opacity-90 mb-2">Your Ticket Number</p>
        <h1 className="text-5xl font-bold tracking-tight">{ticketNumber}</h1>
        <p className="text-sm opacity-80 mt-3">
          Issued at {issuedAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      <div className="p-6 space-y-4">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${statusStyles[status]}`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          {statusText[status]}
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm mb-1">Position in Queue</p>
            <p className="text-2xl font-bold text-gray-900">{queuePosition}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm mb-1">Est. Wait Time</p>
            <p className="text-2xl font-bold text-gray-900">{estimatedWaitTime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard; 