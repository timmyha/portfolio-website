import styled from 'styled-components'
import Icon from './icons/crashpad.png'
import { FaReact, FaJs } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'
import { SiFirebase, SiVite } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'



const Crashpad = ( { darkMode }) => {
  return (
    <Crash>
      <Container>
        <Browser>
          <BrowserTitle><Circle /></BrowserTitle>
          <BrowserWindow>
            <img style={{
              "width": "100%",
              "borderRadius": "0px 0px 5px 5px"
            }}
              className="preview"
              src={Icon}
            />
          </BrowserWindow>
        </Browser>
      </Container>
      <Details>
        <Desc>
          Crashpad, a marketplace providing short-term housing for wayward travelers.
        </Desc>
        <Icons>
          <FaJs />&nbsp;<FaReact />&nbsp;<SiStyledcomponents />&nbsp;<SiFirebase />&nbsp;<SiVite />
        </Icons>
        <Links>

          <Button onClick={() => window.open('http://crashpad.vercel.app')}
            style={darkMode ? {
              "backgroundColor": "#f0ff94",
              "color": "#333333"
            } : { "textDecoration": "none" }}>
            Demo</Button>
          <GitButton onClick={() => window.open('https://github.com/timmyha/crashpad')}
            style={darkMode ? {
              "backgroundColor": "#f0ff94",
              "color": "#333333", "fontSize": "35px"
            } : { "textDecoration": "none" }}>
            <AiFillGithub /></GitButton>
        </Links>
      </Details>
    </Crash>
  )
}

const Crash = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 700px;
  margin: auto;
  margin-bottom: 100px;
    @media (max-width: 700px) {
      flex-direction: column;
      width: 100vw;
    }
`;


const Container = styled.div`
display: flex;
width: 100vw;
margin: auto;
margin-bottom: 20px;
transition: .7s;
`
const Browser = styled.div`
  flex-direction: column;
  margin: auto;`

const BrowserTitle = styled.div`
  display: flex;
  margin: auto;
  margin-top: 0px;
  height: 15px;
  border-radius: 5px 5px 0px 0px;
  border: 2px solid #333333;
  border-bottom: 0px;
  background-color: #333333;
  width: 300px;
  `
const Circle = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  margin-top: 2px;
  margin-left: 5px;
  border-radius: 100%;
  color: white;
  background-color: hotpink;`

const BrowserWindow = styled.div`
  display: flex;
  margin: auto;
  margin-top: 0px;
  border: 2px;
  border-color: #333333;
  border-style: solid;
  border-radius: 0px 0px 5px 5px;
  background-color: transparent;
  width: 300px;
  height: 250px;
 `

 const Details = styled.div`
display: flex;
flex-direction: column;
margin: auto;
justify-content: center;`

const Desc = styled.span`
  display: flex;
  font-size: 30px;
  font-family: Roboto;
  width: 370px;
  margin: auto;
  align-self: center;
  text-align: center;
    @media (max-width: 500px) {
      margin: auto;
  }`

const Icons = styled.span`
  font-size: 30px;
  width: 370px;
  padding-top: 20px;
  text-align: center;
    @media (max-width: 500px) {
      margin: auto;
  }`

const Links = styled.span`
  display: flex;
  font-size: 15px;
  font-family: Roboto;
  margin: auto;
  margin-top: 20px;
  align-self: center;
  text-align: center;`

const Button = styled.div`
  border: 1px solid #333333;
  padding: 10px;
  padding-top: 17px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
    &:hover {
      border-color: #333333;
      background-color: #333333;
      color: #00d8fe;
      transition: .2s;
      opacity: .8;
    }`

const GitButton = styled.div`
  border: 1px solid #333333;
  background-color: transparent;
  padding-top: 8px;
  padding-right: 6px;
  padding-left: 6px;
  font-size: 35px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
    &:hover {
      border-color: #333333;
      background-color: #333333;
      color: #00d8fe;
      transition: .2s;
      opacity: .9;
    }`

export default Crashpad