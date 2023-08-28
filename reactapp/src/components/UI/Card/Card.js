import React from 'react';
import Button from '../Button/Button';

const Card = ({
  question,
  options,
  selectedOption,
  handleOptionSelect,
  correctAnswerMarkUpdate, // Add this prop
  attempt, // Add this prop
  answer, // Add this prop
}) => {
  const handleOptionClick = (optionIndex) => {
    handleOptionSelect(optionIndex);
    attempt(options[optionIndex] === answer);
    if (options[optionIndex] === answer) {
      correctAnswerMarkUpdate();
    }
  };

  return (
    <div className="card">
      <h4>{question}</h4>
      <div className="options">
        {options.map((option, index) => (
          <Button
            key={index}
            label={option}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
