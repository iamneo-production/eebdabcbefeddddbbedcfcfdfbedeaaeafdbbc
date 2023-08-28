import React from 'react';
import Options from '../Button/Options';

const Card = ({ question, options,selectedOption, handleOptionSelect  }) => {
  return (
    <div className="card">
      <h2>{question}</h2>
      <Options options={options} selectedOption={selectedOption} handleOptionSelect ={handleOptionSelect } />
    </div>
  );
};

export default Card;