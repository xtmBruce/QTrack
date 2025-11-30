import React from "react";
import { FiClock, FiUser, FiTrendingUp } from "react-icons/fi";

interface WaitTimeEstimateProps {
  position: number;
  estimatedMinutes: number;
  peopleAhead: number;
}

const WaitTimeEstimate: React.FC<WaitTimeEstimateProps> = ({
  position,
  estimatedMinutes,
  peopleAhead
}) => {
  const getTimeColor = () => {
    if (estimatedMinutes <= 5) return 'text-green-600';
    if (estimatedMinutes <= 15) return 'text-amber-500';
    return 'text-orange-600';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FiClock className="w-5 h-5 text-blue-600" />
          </div>
          Wait Time Estimate
        </h2>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-center my-4">
          <p className="text-gray-500 text-sm mb-2">Estimated time until your turn</p>
          <p className={`text-5xl sm:text-6xl font-bold ${getTimeColor()} mb-2`}>
            {estimatedMinutes}
            <span className="text-2xl text-gray-500 ml-1">min</span>
          </p>
          <p className="text-sm text-gray-500">
            Based on current queue flow
          </p>
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Your Position</span>
            </div>
            <span className="font-medium">#{position}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiTrendingUp className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">People Ahead</span>
            </div>
            <span className="font-medium">{peopleAhead}</span>
          </div>
          
          <div className="pt-2">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full" 
                style={{ 
                  width: `${Math.min(100, 100 - ((peopleAhead) / (peopleAhead + 5) * 100))}%` 
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitTimeEstimate;