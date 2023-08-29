import './Button.css';
import React from 'react';
import useState from '../../../App';
import Card from '../Card/Card';

const Button = ({children ,...attempt}) => {
    return (
      <button type="button" className = "custom-button" >
        {children}
      </button>
    );
  };


export default Button;