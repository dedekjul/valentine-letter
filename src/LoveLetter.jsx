import { useState } from 'react';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="relative">
        {/* Envelope */}
        <div className={`relative transition-all duration-500 ${isOpen ? 'scale-75 -translate-y-20' : ''}`}>
          <div className="bg-white w-64 h-48 border-2 border-pink-300 rounded-lg shadow-lg" />
          <div className={`absolute top-0 w-full h-full transition-transform duration-500 origin-bottom ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}>
            <div className="w-64 h-48">
              <div className="absolute top-0 w-full h-full bg-pink-50 border-2 border-pink-300 rounded-lg" />
              <div className="absolute -top-24 left-0 w-full flex justify-center">
                <div className="w-0 h-0 border-l-[128px] border-r-[128px] border-b-[100px] border-transparent border-b-pink-200" />
              </div>
              <div className="absolute -top-24 left-0 w-full h-full flex justify-center">
                <div className="w-0 h-0 border-l-[128px] border-r-[128px] border-b-[100px] border-transparent border-l-pink-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Letter content */}
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="bg-white w-64 h-96 p-6 rounded-lg shadow-lg border-2 border-pink-200">
            <div className="text-pink-900 space-y-4">
              <h2 className="text-xl font-bold">To: Crush</h2>
              <div className="text-sm space-y-2">
                <p>Dear crush, you are so beautiful</p>
                <p>That every time i see you</p>
                <p>my world stops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Open/Close buttons */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 space-x-4">
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
            >
              OPEN
            </button>
          )}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              CLOSE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;