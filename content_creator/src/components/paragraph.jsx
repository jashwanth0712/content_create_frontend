import React from 'react';
import { useLocation } from 'react-router-dom';

const Paragraph = () => {
  const location = useLocation();
  const Result = location.state && location.state.prompt;
  // Check if the state contains the 'result' key and assign it to the Result variable
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 class="text-xl font-semibold mb-4 z-50">Result</h2>

      <p className="text-gray-800 text-lg leading-7 border-l-4 border-blue-500 pl-4">
        {Result}
      </p>
    </div>
  )
};

export default Paragraph;
