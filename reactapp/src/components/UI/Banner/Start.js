import React from 'react';
import Button from '../Button/Button';

const Start = ({ onStart }) => {
  return (
    <div className='startbtn'>
      <br/>
      <br/>
      <Button label="Start Quiz" onClick={onStart} />
    </div>
  );
};

export default Start;