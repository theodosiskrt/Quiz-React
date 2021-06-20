import { CenteredDiv, Title, Button } from './styledComponents/styles.js'



const StartGame = ({onBegin, isHidden, score}) => {
     return !isHidden ? (
         <CenteredDiv>
            <Title>Welcome to the quiz!! </Title>
            <div style = {{textAlign: "center"}}>
                <Button size={3} onClick={onBegin}>Start Game</Button>
            </div>
        </CenteredDiv>
    ) : null
}

export default StartGame
