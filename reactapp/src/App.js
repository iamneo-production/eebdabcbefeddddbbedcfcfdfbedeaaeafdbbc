import React from 'react';
import './App.css';
import Quiz from './component/UI/Banner/Quiz';

const questions = [

  {
    question: 'Who is the father of nation?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Donald Trump','Barrack Obama'],
    correctIndex: 0,
  },
  {
    question: 'What color is are the leaves?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctIndex: 3,
  },
  {
    question: 'What color is are the sky?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctIndex: 0,
  },
  {
    question: 'What color is are the sky?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctIndex: 0,
  },
  {
    question: 'What color is are the fire?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    correctIndex: 2,
  }
  // Add more questions...
];

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;