import React, { useState } from 'react';
import { FaTimes, FaExchangeAlt } from 'react-icons/fa';

interface TransferTicketModalProps {
  onClose: () => void;
}

const TransferTicketModal: React.FC<TransferTicketModalProps> = ({ onClose }) => {
  const [ticketNumber, setTicketNumber] = useState('');
  const [targetCounter, setTargetCounter] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const counters = ['Counter 1', 'Counter 2', 'Counter 3', 'Counter 4', 'Counter 5'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Transfer ticket:', { ticketNumber, targetCounter, reason });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <FaExchangeAlt />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Transfer Ticket</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes className="text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Ticket Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ticket Number
            </label>
            <input
              type="text"
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
              placeholder="e.g., A-143"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Target Counter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Counter
            </label>
            <select
              value={targetCounter}
              onChange={(e) => setTargetCounter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            >
              <option value="">Select counter...</option>
              {counters.map((counter) => (
                <option key={counter} value={counter}>{counter}</option>
              ))}
            </select>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason (Optional)
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Why is this ticket being transferred?"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Transferring...</span>
                </>
              ) : (
                'Transfer'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferTicketModal;