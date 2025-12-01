import React from 'react';
import { FaUsers, FaStoreAlt } from 'react-icons/fa';

interface QueueStatusProps {
  waitingCount: number;
  openCounters: number;
}

const QueueStatus: React.FC<QueueStatusProps> = ({ waitingCount, openCounters }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
      <div className="bg-white py-6 px-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3">
        <div className="p-3 bg-blue-50 rounded-full text-blue-600">
          <FaUsers size={20} />
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{waitingCount}</div>
          <div className="text-xs text-gray-500 font-medium uppercase">People Waiting</div>
        </div>
      </div>

      <div className="bg-white py-6 px-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3">
        <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
          <FaStoreAlt size={20} />
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{openCounters}</div>
          <div className="text-xs text-gray-500 font-medium uppercase">Active Counters</div>
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;
