import React from 'react'
import { CenteredDiv } from './styledComponents/styles.js'
import Question from './Question.js'



const Game = ({isHidden, questions}) => {
    let i = 0;
    let score = 0

    const checkAnswer = (answer, correctAnswer) => {
        console.log(i)
        i++;
      }

    console.log(questions)
    console.log(i)
    return isHidden ? (
        <div>
            <CenteredDiv>
                {questions.map((question, idx) => idx === i ? <Question key={idx} question={question} checkAnswer={checkAnswer}/> : null )}

            </CenteredDiv>
        </div>
    ) : null
}

export default Game

