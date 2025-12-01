import React from 'react';

interface CurrentTicketProps {
  ticketNumber: string;
  counterNumber: number;
}

const CurrentTicket: React.FC<CurrentTicketProps> = ({ ticketNumber, counterNumber }) => {
  return (
    <div className="flex-1 bg-white rounded-3xl p-12 flex flex-col items-center justify-center shadow-2xl border border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-r from-blue-500 to-indigo-600"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <h2 className="text-gray-500 text-3xl uppercase tracking-[0.2em] font-medium mb-8 z-10">Now Serving</h2>
      
      <div className="text-[14rem] leading-none font-bold text-gray-900 mb-8 font-mono tracking-tighter z-10">
        {ticketNumber}
      </div>
      
      <div className="bg-blue-600 text-white px-12 py-4 rounded-full text-4xl font-bold shadow-lg shadow-blue-200 z-10 flex items-center gap-4">
        <span className="opacity-80 text-2xl uppercase tracking-wider font-medium">Counter</span>
        <span>{counterNumber}</span>
      </div>
    </div>
  );
};

export default CurrentTicket;
