import React, { useState } from 'react';
import './App.css';
import Quiz from './components/UI/Banner/Quiz';
import Start from './components/UI/Banner/Start';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {quizStarted ? (
        <Quiz />
      ) : (
        <Start onStart={() => setQuizStarted(true)} />
      )}
    </div>
  );
}

export default App;
