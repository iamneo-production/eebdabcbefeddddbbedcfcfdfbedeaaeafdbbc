import React from 'react';
import Button from '../Button/Button';

const Card = ({ question, options, selectedOption, handleOptionSelect }) => {
  return (
    <div className="card">
      <h4>{question}</h4>
      <div className="options">
        {options.map((option, index) => (
          <Button
            key={index}
            label={option}
            onClick={() => handleOptionSelect(index)}
            disabled={selectedOption !== null}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
 