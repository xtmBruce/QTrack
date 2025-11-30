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

  const [ticketData] = useState({
    ticketNumber: 'A042',
    queuePosition: 8,
    estimatedWaitTime: 12,
    status: 'waiting' as const,
    issuedAt: new Date()
  });

  const handleGetTicket = () => {
    setIsLoading(true);
    
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 text-white rounded-lg">
                <FiFileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Smart Queue</h1>
                <p className="text-sm text-gray-500">Digital Queue Management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!hasTicket ? (
          <div className="max-w-3xl mx-auto">
            {/* Welcome Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="p-8 sm:p-10 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiFileText className="w-10 h-10 text-blue-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to Smart Queue
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                  Get your digital ticket and track your queue position in real-time. 
                  No more standing in line!
                </p>

                <div className="max-w-xs mx-auto">
                  <Button
                    onClick={handleGetTicket}
                    loading={isLoading}
                    size="lg"
                    className="w-full"
                  >
                    Get My Ticket
                  </Button>
                </div>
              </div>

              {/* How it works */}
              <div className="bg-gray-50 p-8 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-6">
                  How it works
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Get Your Ticket',
                      description: 'Click to get your digital ticket',
                      icon: '1'
                    },
                    {
                      title: 'Track in Real-time',
                      description: 'Monitor your position and wait time',
                      icon: '2'
                    },
                    {
                      title: 'Get Notified',
                      description: 'We\'ll alert you when it\'s your turn',
                      icon: '3'
                    }
                  ].map((step, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-5 rounded-xl border border-gray-100 text-center"
                    >
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                        {step.icon}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Queue Status */}
            <QueueStatus
              currentTicket="A035"
              totalInQueue={23}
              averageWaitTime={5}
              nextTickets={['A036', 'A037', 'A038']}
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TicketCard
                  ticketNumber={ticketData.ticketNumber}
                  queuePosition={ticketData.queuePosition}
                  estimatedWaitTime={ticketData.estimatedWaitTime}
                  status={ticketData.status}
                  issuedAt={ticketData.issuedAt}
                />
              </div>

              <div className="lg:col-span-1">
                <QueueStatus
                  currentTicket="A035"
                  totalInQueue={23}
                  averageWaitTime={5}
                  nextTickets={['A036', 'A037', 'A038']}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <WaitTimeEstimate
                position={ticketData.queuePosition}
                estimatedMinutes={ticketData.estimatedWaitTime}
                peopleAhead={ticketData.queuePosition - 1}
              />

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Ticket Actions</h3>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    onClick={() => window.print()} 
                    className="w-full"
                  >
                    Print Ticket
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={handleCancelTicket} 
                    className="w-full"
                  >
                    Cancel Ticket
                  </Button>
                </div>
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
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto"
            >
              Keep Ticket
            </Button>
            <Button 
              variant="danger" 
              onClick={confirmCancelTicket}
              className="w-full sm:w-auto"
            >
              Yes, Cancel Ticket
            </Button>
          </div>
        }
      >
        <p className="text-gray-600 mb-6">
          Are you sure you want to cancel your ticket? This action cannot be undone.
        </p>
      </Modal>

      {/* Toast Notification */}
      <Toast
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type={toastType}
      />
    </div>
  );
};

export default UserPage;