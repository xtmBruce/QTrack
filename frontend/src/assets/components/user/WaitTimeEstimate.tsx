import React from "react";
import { FiClock } from "react-icons/fi";

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
    if (estimatedMinutes <= 15) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Estimated Wait Time</h3>
          <p className="text-sm text-gray-600">Based on current queue flow</p>
        </div>
        <FiClock className="text-blue-600 w-6 h-6" />
      </div>
      
      <div className="flex items-end gap-2 mb-6">
        <span className={`text-5xl font-bold ${getTimeColor()}`}>{estimatedMinutes}</span>
        <span className="text-2xl font-medium text-gray-600 mb-1">minutes</span>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-blue-200">
        <div>
          <p className="text-sm text-gray-600">Your Position</p>
          <p className="text-2xl font-bold text-gray-900">#{position}</p>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-600">People Ahead</p>
          <p className="text-2xl font-bold text-gray-900">{peopleAhead}</p>
        </div>
      </div>
    </div>
  );
};

export default WaitTimeEstimate; 