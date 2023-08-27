import React,{useState} from 'react'
import Quiz from './Quiz';

export default function Start() {
  const [start, setStart] = useState(true);
  const handleStart = () => {
    setStart(false)
  }
  return (
    <>
      
      {
        !start ? 
          <Quiz count ={0}/>:
          <div className='buttonDiv'>
          <button
          onClick={handleStart}
          className="buttonStart"
          >
            Start Quiz
          </button>
          </div>
      }
    </>
  )
}
