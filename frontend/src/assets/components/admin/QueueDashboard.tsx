import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import AnalyticsCards from './AnalyticsCards';
import CallNextButton from './CallNextButton';
import ActiveQueueList from './ActiveQueueList';
import QuickActions from './actions/QuickActions';
import { FaSignOutAlt, FaCog, FaPause } from 'react-icons/fa';

const QueueDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  // Mock Data
  const [queue, setQueue] = useState([
    { id: '1', ticketNumber: 'A-143', name: 'John Doe', service: 'General Inquiry', waitTime: '12', status: 'waiting' as const },
    { id: '2', ticketNumber: 'A-144', name: 'Sarah Smith', service: 'Payment', waitTime: '8', status: 'waiting' as const },
    { id: '3', ticketNumber: 'B-092', name: 'Mike Johnson', service: 'Technical Support', waitTime: '5', status: 'waiting' as const },
    { id: '4', ticketNumber: 'A-145', name: 'Emily Davis', service: 'General Inquiry', waitTime: '2', status: 'waiting' as const },
  ]);

  const [currentTicket, setCurrentTicket] = useState<string | null>('A-142');
  const [isCalling, setIsCalling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleCallNext = () => {
    if (isPaused) {
      alert('Queue is currently paused. Please resume to call next ticket.');
      return;
    }

    setIsCalling(true);
    setTimeout(() => {
      if (queue.length > 0) {
        const next = queue[0];
        setCurrentTicket(next.ticketNumber);
        setQueue(queue.slice(1));
      }
      setIsCalling(false);
    }, 1000);
  };

  const handleRemove = (id: string) => {
    const confirmed = window.confirm('Are you sure you want to remove this ticket from the queue?');
    if (confirmed) {
      setQueue(queue.filter(item => item.id !== id));
    }
  };

  const handlePrioritize = (id: string) => {
    const item = queue.find(q => q.id === id);
    if (item) {
      const newQueue = [item, ...queue.filter(q => q.id !== id)];
      setQueue(newQueue);
    }
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      logout();
      navigate('/admin/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">Q</div>
          <span className="font-bold text-gray-800 text-lg">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
            <span className="text-gray-600">Logged in as:</span>
            <span className="font-semibold text-gray-900">{user?.username}</span>
          </div>

          {/* Counter Status */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
            isPaused 
              ? 'bg-amber-50 text-amber-700' 
              : 'bg-blue-50 text-blue-700'
          }`}>
            {isPaused && <FaPause className="text-xs" />}
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-green-500'}`}></span>
            {isPaused ? 'Queue Paused' : 'Counter 3 Active'}
          </div>

          {/* Settings Button */}
          <button 
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="Settings"
          >
            <FaCog />
          </button>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            title="Logout"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </nav>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Queue Overview</h1>
            <p className="text-gray-500">Manage tickets and monitor performance</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="hidden md:block text-right mr-4">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Now Serving</div>
              <div className="text-2xl font-mono font-bold text-blue-600">{currentTicket || '---'}</div>
            </div>
            <CallNextButton 
              onCallNext={handleCallNext} 
              isLoading={isCalling} 
              disabled={queue.length === 0 || isPaused} 
            />
          </div>
        </div>

        {/* Pause Alert Banner */}
        {isPaused && (
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
              <FaPause />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-amber-900">Queue is Paused</h4>
              <p className="text-sm text-amber-700">No new tickets will be called until you resume the queue.</p>
            </div>
            <button 
              onClick={handleTogglePause}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors text-sm"
            >
              Resume Now
            </button>
          </div>
        )}

        {/* Analytics */}
        <AnalyticsCards 
          totalServed={142} 
          avgWaitTime={12} 
          pendingCount={queue.length} 
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Active Queue */}
          <div className="lg:col-span-2">
            <ActiveQueueList 
              queue={queue} 
              onRemove={handleRemove} 
              onPrioritize={handlePrioritize} 
            />
          </div>

          {/* Right: Quick Actions & System Status */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <QuickActions 
              isPaused={isPaused}
              onTogglePause={handleTogglePause}
            />

            {/* System Status */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">System Status</h3>
              <p className="text-indigo-100 text-sm mb-4">All systems operational. WebSocket connection active.</p>
              <div className="flex items-center gap-2 text-xs font-mono bg-white/10 p-2 rounded">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Connected to Server
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QueueDashboard;