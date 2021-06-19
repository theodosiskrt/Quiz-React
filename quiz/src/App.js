import StartGame from './components/StartGame.js';
import Game from './components/Game.js'

import { useState } from 'react';

function App() {

  const [isHiddenStart, setIsHiddenStart] = useState(false);
  const [questions, setQuestions] = useState([{
    question: "How many color does a rainbow have?",
    possibleAnswers:["5", "6", "7", "8"],
    correctAnswer: "7",
    shown: false
  },
  {
    question: "Where was Leonardo Da Vinci from?",
    possibleAnswers:["Italy", "Germany", "Greece", "Portugal"],
    correctAnswer: "Italy",
    shown: false
  },
])
  const BeginGame = () => {
    setIsHiddenStart(true);
  }

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <div className="App">
      <StartGame onBegin={BeginGame} isHidden={isHiddenStart}/>
      <Game isHidden={isHiddenStart} questions={shuffle(questions)}/>
    </div>
  );
}

export default App;
