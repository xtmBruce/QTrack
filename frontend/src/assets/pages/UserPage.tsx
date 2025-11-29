
import React, { useState } from 'react';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import Loading from '../components/common/Loading';
import Toast from '../components/common/Toast';
import TicketCard from '../components/user/TicketCard';
import QueueStatus from '../components/user/QueueStatus';
import WaitTimeEstimate from '../components/user/WaitTimeEstimate';
import { FiFileText } from 'react-icons/fi';

const UserPage: React.FC = () => {
  const [hasTicket, setHasTicket] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  const [isLoading, setIsLoading] = useState(false);

  // Mock ticket data
  const [ticketData] = useState({
    ticketNumber: 'A042',
    queuePosition: 8,
    estimatedWaitTime: 12,
    status: 'waiting' as const,
    issuedAt: new Date()
  });

  const handleGetTicket = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setHasTicket(true);
      setToastType('success');
      setToastMessage('Ticket generated successfully!');
      setShowToast(true);
    }, 1500);
  };

  const handleCancelTicket = () => {
    setIsModalOpen(true);
  };

  const confirmCancelTicket = () => {
    setHasTicket(false);
    setIsModalOpen(false);
    setToastType('info');
    setToastMessage('Ticket cancelled successfully');
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FiFileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Smart Queue</h1>
                <p className="text-sm text-gray-600">Digital Queue Management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!hasTicket ? (
          // Welcome Screen
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiFileText className="w-10 h-10 text-blue-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Welcome to Smart Queue
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Get your digital ticket and track your queue position in real-time. 
                No more standing in line!
              </p>

              <Button
                onClick={handleGetTicket}
                loading={isLoading}
                size="lg"
                fullWidth
              >
                Get My Ticket
              </Button>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">How it works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2">
                      1
                    </div>
                    <p className="text-sm text-gray-600">Click to get your digital ticket</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2">
                      2
                    </div>
                    <p className="text-sm text-gray-600">Track your position and wait time</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2">
                      3
                    </div>
                    <p className="text-sm text-gray-600">Get notified when it's your turn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Queue Status */}
            <div className="mt-8">
              <QueueStatus
                currentTicket="A035"
                totalInQueue={23}
                averageWaitTime={5}
                nextTickets={['A036', 'A037', 'A038']}
              />
            </div>
          </div>
        ) : (
          // Ticket Display Screen
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Ticket Card */}
              <TicketCard
                ticketNumber={ticketData.ticketNumber}
                queuePosition={ticketData.queuePosition}
                estimatedWaitTime={ticketData.estimatedWaitTime}
                status={ticketData.status}
                issuedAt={ticketData.issuedAt}
              />

              {/* Queue Status */}
              <QueueStatus
                currentTicket="A035"
                totalInQueue={23}
                averageWaitTime={5}
                nextTickets={['A036', 'A037', 'A038']}
              />
            </div>

            {/* Wait Time Estimate */}
            <WaitTimeEstimate
              position={ticketData.queuePosition}
              estimatedMinutes={ticketData.estimatedWaitTime}
              peopleAhead={ticketData.queuePosition - 1}
            />

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ticket Actions</h3>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => window.print()}>
                  Print Ticket
                </Button>
                <Button variant="danger" onClick={handleCancelTicket}>
                  Cancel Ticket
                </Button>
              </div>
            </div>
          </div>
        )}

        {isLoading && <Loading text="Getting your ticket..." fullScreen />}
      </main>

      {/* Cancel Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Cancel Ticket"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Keep Ticket
            </Button>
            <Button variant="danger" onClick={confirmCancelTicket}>
              Yes, Cancel
            </Button>
          </>
        }
      >
        <p className="text-gray-600">
          Are you sure you want to cancel your ticket? You will lose your position in the queue 
          and will need to get a new ticket.
        </p>
      </Modal>

      {/* Toast Notifications */}
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default UserPage;