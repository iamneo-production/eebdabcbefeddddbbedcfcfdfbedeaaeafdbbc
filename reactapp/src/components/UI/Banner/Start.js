import React from 'react';
import Button from '../Button/Button';

const Start = ({ onStart }) => {
  return (
    <div className="start">
      <h1>Quizz App</h1>
      <br/>
      <br/>
      <div className='startbtn'><Button label="Start Quiz" onClick={onStart} /></div>
      
    </div>
  );
};

export default Start;