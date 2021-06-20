import { CenteredDiv, Title, Button } from './styledComponents/styles.js'



const EndGame = ({onPlayAgain, onHome, isHidden, score}) => {
     return !isHidden ? (
         <CenteredDiv>
            <Title>Your Score is {score}</Title>
            <div style = {{textAlign: "center"}}>
                <Button size={3} marginX={4} onClick={onPlayAgain}>Play Again</Button>
                <Button size={3} marginX={4} onClick={onHome}>Home Screen</Button>

            </div>
        </CenteredDiv>
    ) : null
}

export default EndGame
