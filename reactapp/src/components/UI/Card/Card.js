import React,{useState} from "react";
import './Card.css'
import Button from "../Button/Button";

function Card({
    key,question,correctAnswerMarkUpdate,attempt,options,answer}){

    const [click,setClick] = useState(false);
    const handleClick=()=>{
        const clicked = attempt;
        if(clicked)
            setClick(true)
    }    
    return(
        <div className = "cardBack">
            <h4>{question}</h4>
            <div className="buttons" >
                <div className="buttons1" disabled = {click}>
                <Button>{options.option1}</Button>
                <Button>{options.option2}</Button>
                <Button>{options.option3}</Button>
                <Button>{options.option4}</Button>
                </div>
            </div>
        </div>
    )
}

export default Card;

