import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

interface CallNextButtonProps {
  onCallNext: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const CallNextButton: React.FC<CallNextButtonProps> = ({ onCallNext, isLoading = false, disabled = false }) => {
  return (
    <button
      onClick={onCallNext}
      disabled={disabled || isLoading}
      className={`
        w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg shadow-blue-200
        flex items-center justify-center gap-3 transition-all transform active:scale-95
        ${disabled 
          ? 'bg-gray-300 cursor-not-allowed shadow-none' 
          : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl'
        }
      `}
    >
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>Calling...</span>
        </>
      ) : (
        <>
          <FaBullhorn className="text-xl" />
          <span>Call Next Ticket</span>
        </>
      )}
    </button>
  );
};

export default CallNextButton;
