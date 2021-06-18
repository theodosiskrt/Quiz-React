import StartGame from './components/StartGame.js';
import { useState } from 'react';

function App() {

  const [questions, setQuestions] = useState([{
    question: "How many color does a rainbow have?",
    possibleAnswers:["5", "6", "7", "8"],
    rightAnswer: "7"
  },
  {
    question: "Where was Leonardo Da Vinci from?",
    possibleAnswers:["Italy", "Germany", "Greece", "Portugal"],
    rightAnswer: "Italy"
  },
])
  const BeginGame = () => {
    console.log("Starting");
  }

  return (
    <div className="App">
      <StartGame onBegin={BeginGame}/>
    </div>
  );
}

export default App;
