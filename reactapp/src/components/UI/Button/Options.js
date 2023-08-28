import React from 'react';

const Options = ({ options, selectedOption, handleOptionSelect  }) => {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionSelect (index)}
          disabled={selectedOption !== null && selectedOption !== index}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;