import styled from 'styled-components'

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: Blue;
`;

const Button = styled.button`
    font-size: 2.5em;
    padding: 0.5em;
    border-radius:0.2em;
    border: solid 2px blue;
    background-color: LightBlue;
    color: blue;
    :hover {
        background-color: CadetBlue;
        color:Lightblue
    }
`

const StartGame = ({onBegin}) => {
    return (
        <div className="StartGame">
            <Title>Welcome to the quiz!!</Title>
            <div style = {{textAlign: "center"}}>
                <Button onClick={onBegin}>Start Game</Button>
            </div>
            
        </div>
    )
}

export default StartGame
