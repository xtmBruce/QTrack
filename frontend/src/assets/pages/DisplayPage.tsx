
import React from 'react';
import { FiMonitor } from 'react-icons/fi';

const DisplayPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Queue Display</h1>
          <p className="text-xl text-blue-200">Public Waiting Area Screen</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center mb-8">
          <p className="text-2xl font-medium text-blue-200 mb-4">Now Serving</p>
          <h2 className="text-9xl font-bold mb-8">A035</h2>
          <p className="text-xl text-blue-200">Please proceed to Counter 1</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-blue-200 mb-2">Next Up</p>
            <p className="text-4xl font-bold">A036</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-blue-200 mb-2">In Queue</p>
            <p className="text-4xl font-bold">23</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-blue-200 mb-2">Avg. Wait</p>
            <p className="text-4xl font-bold">5m</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <FiMonitor className="w-16 h-16 mx-auto mb-4 text-blue-300" />
          <p className="text-blue-200">
            Full display functionality coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;