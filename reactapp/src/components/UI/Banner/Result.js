import React from 'react';
import Button from '../Button/Button';

const Result = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result-container">
     
     <br/>
      <p>You have answered {score} / {totalQuestions} Correctly</p>
      <br/>
      <br/>
      <Button label="Start Quiz" onClick={onRestart} />
    </div>
  );
};

export default Result;

