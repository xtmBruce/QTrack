import React, { useState } from 'react';
import TicketCard from '../components/user/TicketCard';
import QueueStatus from '../components/user/QueueStatus';
import WaitTimeEstimate from '../components/user/WaitTimeEstimate';
import { FaPlus } from 'react-icons/fa';

const UserPage: React.FC = () => {
  // Mock state for demonstration
  const [hasTicket, setHasTicket] = useState(false);
  const [ticket, setTicket] = useState({
    number: 'A-142',
    status: 'waiting' as 'waiting' | 'serving' | 'completed' | 'cancelled',
    timestamp: '10:45 AM'
  });

  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const handleJoinQueue = () => {
    // Simulate API call
    setHasTicket(true);
    // Update ticket status for demo
    setTicket(prev => ({ ...prev, status: 'waiting' }));
  };

  const confirmLeaveQueue = () => {
    setHasTicket(false);
    setShowLeaveModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100">
      {/* Background Decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col p-6">
        {/* Header */}
        <header className="flex justify-between items-center py-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
              Q
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">SmartQueue</h1>
          </div>
          <div className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs font-semibold text-gray-500 shadow-sm">
            v1.0
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          {!hasTicket ? (
            <div className="flex-1 flex flex-col items-center justify-center animate-fade-in">
              <div className="relative mb-12 group cursor-pointer" onClick={handleJoinQueue}>
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-ping-slow group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-4 bg-blue-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Main Button */}
                <div className="relative w-64 h-64 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl shadow-blue-200 border-[6px] border-white group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center overflow-hidden relative">
                    <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-50"></div>
                    <FaPlus className="text-5xl text-blue-600 mb-4 drop-shadow-sm group-hover:rotate-90 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)" />
                    <span className="text-xl font-bold text-gray-800 tracking-wide">Join Queue</span>
                    <span className="text-xs text-blue-500 font-medium mt-1 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-12">Tap to start</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12 space-y-3">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Ready to join?</h2>
                <p className="text-gray-500 text-lg max-w-[280px] mx-auto leading-relaxed">
                  Get your digital ticket and track your status in real-time.
                </p>
              </div>
              
              <div className="w-full mt-auto mb-8">
                <QueueStatus waitingCount={12} openCounters={3} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 animate-slide-up pb-8">
              <div className="flex justify-between items-end px-1 mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Status</h2>
                  <p className="text-sm text-gray-500">You are currently in line</p>
                </div>
                <button 
                  onClick={() => setShowLeaveModal(true)} 
                  className="text-sm text-red-600 hover:text-red-700 font-semibold px-4 py-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                >
                  Leave Queue
                </button>
              </div>

              <div className="space-y-6">
                <TicketCard 
                  ticketNumber={ticket.number} 
                  status={ticket.status} 
                  timestamp={ticket.timestamp}
                />

                <WaitTimeEstimate minutes={15} />
                
                <QueueStatus waitingCount={12} openCounters={3} />
              </div>

              <div className="mt-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50 shadow-sm">
                <div className="flex gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="font-bold text-blue-900 text-sm mb-1">Pro Tip</p>
                    <p className="text-blue-800/80 text-sm leading-relaxed">
                      Enable notifications to get alerted when your turn is coming up. Stay close to the waiting area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Confirmation Modal */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm transform transition-all scale-100 animate-scale-up border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Leave the queue?</h3>
            <p className="text-gray-500 text-center mb-8 leading-relaxed">
              You will lose your spot <span className="font-semibold text-gray-700">{ticket.number}</span>. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowLeaveModal(false)}
                className="flex-1 px-4 py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmLeaveQueue}
                className="flex-1 px-4 py-3.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                Leave Queue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
