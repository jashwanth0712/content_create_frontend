import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="flex flex-col items-center">
      <img
        src="https://via.placeholder.com/64"
        alt="slider thumb"
        className="h-8 w-8 absolute top-1/2 transform -translate-y-1/2 -left-4"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="appearance-none h-1 w-64 rounded-full bg-gray-300 outline-none"
      />
    </div>
  );
};

export default Slider;
