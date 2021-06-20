import React from 'react'
import { CenteredDiv, Title } from './styledComponents/styles.js'
import Question from './Question.js'

import { useState, useEffect } from 'react';

const Game = ({isHidden, questions, score, setScore, EndGame}) => {
    const [i, seti] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    useEffect(() => {
        setQuestion(questions[i]);
    },[i])

    const checkAnswer = (answer) => {
        if(answer === question.correctAnswer){
            setScore(score + 15);
        }
        if(i < questions.length - 1){
            seti(i + 1);
        }
        else{
            seti(0);
            EndGame();
        }

      }
    //   console.log("i is ", i)
    return !isHidden ? (
        <div>
            <CenteredDiv>
                {/* {console.log("i, ", i)} */}
                <Question key={i} question={question} checkAnswer={checkAnswer}/> 
                <Title>Score {score}</Title>
            </CenteredDiv>
            
        </div>
    ) : null
}

export default Game

