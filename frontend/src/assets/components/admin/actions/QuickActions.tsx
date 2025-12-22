import React, { useState } from 'react';
import { FaPause, FaPlay, FaExchangeAlt, FaTicketAlt } from 'react-icons/fa';
import TransferTicketModal from './TransferTicketModal';
import IssueSpecialTicketModal from '../actions/IssueSpecialTicketModal';

interface QuickActionsProps {
  isPaused: boolean;
  onTogglePause: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ isPaused, onTogglePause }) => {
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showSpecialTicketModal, setShowSpecialTicketModal] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {/* Pause/Resume Queue */}
          <button 
            onClick={onTogglePause}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors text-sm flex items-center gap-3 ${
              isPaused 
                ? 'bg-green-50 hover:bg-green-100 text-green-700' 
                : 'bg-amber-50 hover:bg-amber-100 text-amber-700'
            }`}
          >
            {isPaused ? <FaPlay /> : <FaPause />}
            {isPaused ? 'Resume Queue' : 'Pause Queue'}
          </button>

          {/* Transfer Ticket */}
          <button 
            onClick={() => setShowTransferModal(true)}
            className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition-colors text-sm flex items-center gap-3"
          >
            <FaExchangeAlt />
            Transfer Ticket
          </button>

          {/* Issue Special Ticket */}
          <button 
            onClick={() => setShowSpecialTicketModal(true)}
            className="w-full text-left px-4 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium transition-colors text-sm flex items-center gap-3"
          >
            <FaTicketAlt />
            Issue Special Ticket
          </button>
        </div>
      </div>

      {/* Modals */}
      {showTransferModal && (
        <TransferTicketModal onClose={() => setShowTransferModal(false)} />
      )}
      {showSpecialTicketModal && (
        <IssueSpecialTicketModal onClose={() => setShowSpecialTicketModal(false)} />
      )}
    </>
  );
};

export default QuickActions;