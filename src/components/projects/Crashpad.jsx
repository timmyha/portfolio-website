import styled from 'styled-components'
import Icon from './icons/crashpad.png'

const Crashpad = () => {
  return (
    <Container>
      <Browser>
        <BrowserTitle><Circle /></BrowserTitle>
        <BrowserWindow>
          <img style={{"width":"100%",
                        "borderRadius":"0px 0px 5px 5px"}} 
                className="preview" 
                src={Icon} 
          />
        </BrowserWindow>
      </Browser>
    </Container>
  )
}

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

export default Crashpad