import React from 'react'


export default function Card(props) {
    return (    
    <>
        <div className='question-container'>
            <h4>{props.question}</h4>
        </div>
        <div className='button-container'>
            <button
                // text={props.arr}
                // ans={props.ans}
                // count = {props.count}
                // handleCount = {props.handleCount}
                // handleClick = {props.handleClick}
            > 
            {props.options.option1}
            </button>
            <button
                // text={props.arr}
                // ans={props.ans}
                // count = {props.count}
                // handleCount = {props.handleCount}
                // handleClick = {props.handleClick}
            > 
            {props.options.option2}
            </button>
            <button
                // text={props.arr}
                // ans={props.ans}
                // count = {props.count}
                // handleCount = {props.handleCount}
                // handleClick = {props.handleClick}
            > 
            {props.options.option3}
            </button>
            <button
                // text={props.arr}
                // ans={props.ans}
                // count = {props.count}
                // handleCount = {props.handleCount}
                // handleClick = {props.handleClick}
            > 
            {props.options.option4}
            </button>
        </div>
        </>
  )
}
