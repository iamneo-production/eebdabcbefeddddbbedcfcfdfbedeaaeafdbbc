import React from 'react';
import Button from '../Button/Button';

const Result = ({ answers, questions, restartQuiz }) => {
  const correctAnswers = answers.reduce((count, answer, index) => {
    return answer === questions[index].correctIndex ? count + 1 : count;
  }, 0);

  return (
    <div className="result">
      <h1>Quizz App</h1>
      <p>You have answered {correctAnswers} / {questions.length} Correctly</p>
      <br/>
      <br/>
      <Button label="Start Quiz" onClick={restartQuiz} />
    </div>
  );
};

export default Result;