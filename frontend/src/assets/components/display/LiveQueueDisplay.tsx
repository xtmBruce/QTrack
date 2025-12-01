import React, { useState, useEffect } from 'react';
import CurrentTicket from './CurrentTicket';
import UpcomingTickets from './UpcomingTickets';

const LiveQueueDisplay: React.FC = () => {
  // Mock Data
  const [currentTicket] = useState({ number: 'A-142', counter: 3 });
  const [upcomingTickets] = useState(['A-143', 'A-144', 'B-092', 'A-145']);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">Q</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">General Hospital</h1>
            <p className="text-gray-500 text-lg">Main Waiting Area</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold text-gray-900 font-mono">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-gray-500 font-medium">
            {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-12 gap-6 h-full pb-2">
        {/* Left: Current Ticket (Larger) */}
        <div className="col-span-8 flex flex-col">
          <CurrentTicket 
            ticketNumber={currentTicket.number} 
            counterNumber={currentTicket.counter} 
          />
          
          {/* Stats Footer */}
          <div className="grid grid-cols-2 gap-6 mt-6 h-32">
             <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                <span className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-1">Average Wait Time</span>
                <span className="text-4xl font-bold text-gray-900">12 <span className="text-xl text-gray-500 font-normal">min</span></span>
             </div>
             <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                <span className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-1">Total Waiting</span>
                <span className="text-4xl font-bold text-blue-600">{upcomingTickets.length + 12}</span>
             </div>
          </div>
        </div>

        {/* Right: Upcoming List */}
        <div className="col-span-4">
          <UpcomingTickets tickets={upcomingTickets} />
        </div>
      </main>
    </div>
  );
};

export default LiveQueueDisplay;
