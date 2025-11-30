import React from 'react';
import { FiMonitor, FiClock, FiUser, FiArrowRight } from 'react-icons/fi';

const DisplayPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-600 text-white mb-4">
            <FiMonitor className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Smart Queue Display
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Public Waiting Area Screen
          </p>
        </header>

        {/* Now Serving Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 p-6 sm:p-8 text-center">
            <p className="text-blue-100 text-sm sm:text-base font-medium mb-2">
              NOW SERVING
            </p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
              A035
            </h2>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-white">
                Please proceed to Counter 1
              </span>
            </div>
          </div>
        </div>

        {/* Queue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">In Queue</h3>
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiUser className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-4xl font-bold text-gray-900">23</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Avg. Wait Time</h3>
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiClock className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-4xl font-bold text-gray-900">5<span className="text-xl text-gray-500 ml-1">min</span></p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Next In Line</h3>
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="flex gap-2">
              {['A036', 'A037', 'A038'].map((ticket, i) => (
                <span 
                  key={ticket} 
                  className={`px-4 py-2 rounded-lg font-medium ${
                    i === 0 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {ticket}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;