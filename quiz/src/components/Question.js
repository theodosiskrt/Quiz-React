import React from 'react'
import {Title, Button} from './styledComponents/styles.js'

const Question = ({question, checkAnswer}) => {
    return (
        <div>
            <Title>{question.question}</Title>
            <div style = {{textAlign: "center"}}>
                {question.possibleAnswers.map((answer, idx) => (<Button key={idx}size={2} marginY={5} marginX={10} onClick={() => checkAnswer(answer, question.correctAnswer)}>{answer}</Button>))}
            </div>
        </div>
    )
}

export default Question