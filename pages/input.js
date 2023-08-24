
import React, { useState } from 'react';

function Slidebar() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    handleInputChange(value);
  };

  return (
    <div>
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
      <div className="flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-1/2"
      />
      <input
        type="number"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-1/4 ml-4"
      />
    </div>
    <div className="bg-red-300 h-full" style={{ height: `${inputValue}%` }}></div>
      </div>
    </div>
    </div>
    
  );
}

export default Slidebar;