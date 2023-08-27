import React ,{ useState } from 'react'
import Card from '../Card/Card'
 
import Result from './Result';

export default function Quiz() {
    const options1=["Mahatma Gandhi","Jawaharlal Nehru","Donald Trump","Barack Obama"];
    const options2=["Blue", "Red", "Yellow","Green"];
    const [active, setActive] = useState(true);
    const [complete, setComplete] = useState(0);
    const handleActive = () => {
        setActive(false);
    }
    
    
    const [count, setCount] = useState(0);

    const handleCount1 = (card1) =>{
        setCount(count+card1);
    }
    const handleCount2 = (card2) =>{
        setCount(count+card2);
    }
    const handleCount3 = (card3) =>{
        setCount(count+card3);
    }
    const handleCount4 = (card4) =>{
        setCount(count+card4);
    }
    const handleCount5 = (card5) =>{
        setCount(count+card5);
    }

    const [click, setClick] = useState(0);

    const handleClick = () =>{
        setClick(click+1);
    }
    const questionProp = {
        questionId : 2,
        question : "What color is are the leaves ?",
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
        answer : "Green"
    }

  return (
    <>
    {
        !active ? 
          <Result count = {count}/>:
          <>
          <div className='card-container'>
            <div className='card-wrapper1'>
                <div className='card1'>
                    <Card
                    key={questionProp.questionId}
                    question={questionProp.question}
                    correctAnswerMarkUpdate={handleCount1}
                    attempt={handleClick}
                    options={{
                    option1: questionProp.option1,
                    option2: questionProp.option2,
                    option3: questionProp.option3,
                    option4: questionProp.option4
                    }}
                    answer={questionProp.answer}




                    //q="Who is the father of our nation ?"
                    //arr={options1}
                    //ans={0}
                    //handleCount = {handleCount1}
                    //handleClick = {handleClick}
                    />
                </div>
                {/* <div className='card1'>
                    <Card
                    q='What color is are the leaves ?'
                    arr={options2}
                    ans={3}
                    handleCount = {handleCount2}
                    handleClick = {handleClick}
                    />
                </div> */}
            </div>
            {/* <div className='card-wrapper2'>
                <div className='card2'>
                    <Card
                    q="What color is the sky ?"
                    arr={options2}
                    ans={0}
                    handleCount = {handleCount3}
                    handleClick = {handleClick}
                    />
                </div>
                <div className='card2'>
                    <Card
                    q="What color is the sky ?"
                    arr={options2}
                    ans={0}
                    handleCount = {handleCount4}
                    handleClick = {handleClick}
                    />
                </div>
                <div className='card2'>
                    <Card
                    q="What color is the fire ?"
                    arr={options2}
                    ans={2}
                    handleCount = {handleCount5}
                    handleClick = {handleClick}
                    />
                </div>
            </div>
             */}
        </div>
        <div className='res-container'>
            {
                click == 5 ?
                <button className="show-res" onClick={handleActive}>
                    Show Results
                </button>:<></>
            }
        </div>
        </>

      }

    
    </>
  )
}
