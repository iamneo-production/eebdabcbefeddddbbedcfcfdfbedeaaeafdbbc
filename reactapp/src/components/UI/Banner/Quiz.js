import React, { useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Result from './Result';

const questions = [
  {
    question: 'Who is the father of the nation?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Donald Trump', 'Barrack Obama'],
    correctAnswerIndex: 0,
  },
  {
    question: 'What color is are the leaves?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctAnswerIndex: 3,
  },
  {
    question: 'What color is are the sky?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctAnswerIndex: 0,
  },
  {
    question: 'What color is are the sky?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctAnswerIndex: 0,
  },
  {
    question: 'What color is are the fire?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctAnswerIndex: 2,
  }
  // Add more questions here
];

const Quiz = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);


  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const allQuestionsAnswered = selectedOptions.every((option) => option !== null);
  
  const handleShowResults = () => {
    setShowScore(true);
  };

  const handleStartQuizAgain = () => {
    setShowScore(false);
    setSelectedOptions(Array(questions.length).fill(null));
  };


  return (
    <div className="quiz-container">
      {!showScore ? (
        <>
          {questions.map((question, index) => (
            <Card
              key={index}
              question={question.question}
              options={question.options}
              selectedOption={selectedOptions[index]}
              handleOptionSelect={(optionIndex) => handleOptionSelect(index, optionIndex)}
            />
          ))}
          {allQuestionsAnswered && (
            <div className='resultbtn'><Button label="Show Results" onClick={handleShowResults} /></div>
            
          )}
        </>
      ) : (
        <Result
          score={calculateScore()}
          totalQuestions={questions.length}
          onRestart={handleStartQuizAgain}
        />
      )}
    </div>
  );
};


export default Quiz;
