import React from 'react';

interface UpcomingTicketsProps {
  tickets: string[];
}

const UpcomingTickets: React.FC<UpcomingTicketsProps> = ({ tickets }) => {
  return (
    <div className="bg-gray-900 rounded-3xl p-8 text-white h-full flex flex-col shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3 border-b border-gray-800 pb-6">
        <span className="w-3 h-8 bg-yellow-500 rounded-full"></span>
        Up Next
      </h3>
      
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        {tickets.map((ticket, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-2xl flex justify-between items-center border border-gray-700/50">
            <span className="text-4xl font-bold font-mono tracking-tight">{ticket}</span>
            <span className="text-sm font-medium px-4 py-2 bg-gray-800 rounded-lg text-gray-400 uppercase tracking-wider">
              Waiting
            </span>
          </div>
        ))}
        
        {/* Empty state placeholders if needed */}
        {tickets.length < 3 && Array.from({ length: 3 - tickets.length }).map((_, i) => (
           <div key={`ph-${i}`} className="bg-gray-800/20 p-6 rounded-2xl flex justify-between items-center border border-gray-800 border-dashed opacity-50">
            <span className="text-4xl font-bold font-mono text-gray-700">---</span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        Please have your ticket ready
      </div>
    </div>
  );
};

export default UpcomingTickets;
