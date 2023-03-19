import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
const navigateTo = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to content-select page with message as parameter
    navigateTo('/form',{message})
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Custom input
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Enter a message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-400 p-2 rounded mb-4 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
