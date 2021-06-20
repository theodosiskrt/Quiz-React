import StartGame from './components/StartGame.js';
import Game from './components/Game.js';
import EndGame from './components/EndGame.js';

import { useState } from 'react';

function App() {

  const [isHiddenStart, setIsHiddenStart] = useState(false);
  const [isHiddenGame, setIsHiddenGame] = useState(true);
  const [isHiddenFinish, setIsHiddenFinish] = useState(true);
  const [questions] = useState([{
    question: "Where was Leonardo Da Vinci from?",
    possibleAnswers:["Italy", "Germany", "Greece", "Portugal"],
    correctAnswer: "Italy"
  },
  {
    question: "How many colors does a rainbow have?",
    possibleAnswers:["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "When did christopher columbus discover america?",
    possibleAnswers:["1442", "1452", "1444", "1544"],
    correctAnswer: "1442"
  },
  {
    question: "Hotel?",
    possibleAnswers:["California", "Transilvania", "I don't know", "Trivago"],
    correctAnswer: "Trivago"
  },
  {
    question: "Who plays Teddy Daniels in the movie Shutter Island?",
    possibleAnswers:[ "Johhny Depp", "Leonardo DiCaprio", "Brad Pit", "Tom Cruise"],
    correctAnswer: "Leonardo DiCaprio"
  }
])

const [score, setScore] = useState(0);

  const BeginGame = () => {
    setScore(0);
    setIsHiddenStart(true);
    setIsHiddenGame(false);
  }

  const FinishGame = () => {
    setIsHiddenGame(true);
    setIsHiddenFinish(false)
  }

  const PlayAgain = () => {
    setScore(0);
    setIsHiddenFinish(true);
    setIsHiddenGame(false);
  }

  const ShowHome = () => {
    setIsHiddenFinish(true);
    setIsHiddenStart(false);

  }


  return (
    <div className="App">
      <StartGame onBegin={BeginGame} isHidden={isHiddenStart}/>
      <Game isHidden={isHiddenGame} questions={questions} score={score} setScore={setScore} EndGame={FinishGame}/>
      <EndGame onPlayAgain={PlayAgain} isHidden={isHiddenFinish} score={score} onHome={ShowHome}/>
    </div>
  );
}

export default App;
