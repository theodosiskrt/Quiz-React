import styled from 'styled-components'

export const CenteredDiv = styled.div`
width:50%;
border: 4px solid blue;
margin-top:10%;
margin-left:20%;
padding-bottom:2em;
border-radius:2em;
`

export const Title = styled.h1`
font-size: 4em;
text-align: center;
color: Blue;
`
export const Button = styled.button`
font-size: ${({size}) => size}em;
padding: 0.5em;
margin: ${({marginY}) => marginY || 0}% ${({marginX}) => marginX || 0}%;
min-width:7em;
border-radius:0.2em;
border: solid 2px blue;
background-color: LightBlue;
color: blue;
:hover {
    background-color: Blue;
    color:white;
}
`