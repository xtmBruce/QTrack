import React from 'react';
import { FaClock } from 'react-icons/fa';

interface WaitTimeEstimateProps {
  minutes: number;
}

const WaitTimeEstimate: React.FC<WaitTimeEstimateProps> = ({ minutes }) => {
  // Determine color based on wait time
  const getColor = (mins: number) => {
    if (mins < 10) return 'text-green-600';
    if (mins < 30) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
          <FaClock size={18} />
        </div>
        <span className="text-gray-700 font-medium">Estimated Wait</span>
      </div>
      
      <div className={`text-xl font-bold ${getColor(minutes)}`}>
        ~{minutes} <span className="text-sm font-normal text-gray-500">min</span>
      </div>
    </div>
  );
};

export default WaitTimeEstimate;
