import React, { useState } from 'react';
import Card from '../Card/Card';
import Result from './Result';
import Button from '../Button/Button';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const allQuestionsAnswered = selectedOptions.every((option) => option !== null);

  const startQuiz = () => {
    setCurrentQuestion(0);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(-1);
    setSelectedOptions(Array(questions.length).fill(null));
    setShowResults(false);
  };

  if (showResults) {
    return <Result answers={selectedOptions} questions={questions} restartQuiz={restartQuiz} />;
  }

  if (currentQuestion === -1) {
    return (
      <div className="quiz-container">
        <h1>Quizz App</h1>
        <br/>
        <br/>
        <Button label="Start Quiz" onClick={startQuiz} />
      </div>
    );
  }

  return (
    <div className="quiz-container">
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
        <div className='resbtn'>
          <Button label="Show Results" onClick={handleShowResults} />
        </div>
      )}
    </div>
  );
};

export default Quiz;
