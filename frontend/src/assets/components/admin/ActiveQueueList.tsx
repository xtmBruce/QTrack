import React from 'react';
import { FaUserClock } from 'react-icons/fa';

interface QueueItem {
  id: string;
  ticketNumber: string;
  name: string;
  service: string;
  waitTime: string;
  status: 'waiting' | 'serving';
}

interface ActiveQueueListProps {
  queue: QueueItem[];
  onRemove: (id: string) => void;
  onPrioritize: (id: string) => void;
}

const ActiveQueueList: React.FC<ActiveQueueListProps> = ({ queue, onRemove, onPrioritize }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="font-bold text-gray-900 text-lg">Active Queue</h3>
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {queue.length} Waiting
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Ticket</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Service</th>
              <th className="px-6 py-4 font-medium">Wait Time</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {queue.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                      <FaUserClock className="text-xl" />
                    </div>
                    <p>No one is currently waiting</p>
                  </div>
                </td>
              </tr>
            ) : (
              queue.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-mono font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {item.ticketNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{item.service}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${
                      parseInt(item.waitTime) > 20 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {item.waitTime} min
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => onPrioritize(item.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-xs font-medium"
                      >
                        Prioritize
                      </button>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-xs font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveQueueList;
