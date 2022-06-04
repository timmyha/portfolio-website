import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Splash from './components/Splash'
import Projects from './components/Projects'
import theme from 'styled-theming'
import { GiMoon, GiStripedSun } from 'react-icons/gi'
import { MdOutlineNightlightRound } from 'react-icons/md'
import Contact from './components/Contact'
import { FiLinkedin, FiGithub, FiMail} from 'react-icons/fi'


function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToContact = () => { 
    window.scroll({
      top: 9999, 
      left: 0, 
      behavior: 'smooth' 
     });
  }

  return (
    <ThemeProvider theme={darkMode
      ? { mode: 'dark' }
      : { mode: 'light' }}>
      <Button 
        onClick={toggleDarkMode}>
          { darkMode 
            ? <GiStripedSun style={{"color":"#dcfe00f9"}} /> 
            : <MdOutlineNightlightRound style={{"color":"black"}} />}
      </Button>
      <Socials>
        <a href="https://www.linkedin.com/in/timothyhansher000/" target="_blank">
        <FiLinkedin style={darkMode ? {"color":"#dcfe00f9"} : {"color":"#333333"}} />
        </a>
        &nbsp;&nbsp;&nbsp;<a href="https://github.com/timmyha" target="_blank">
        <FiGithub style={darkMode ? {"color":"#dcfe00f9"} : {"color":"#333333"}} />
        </a>
        &nbsp;&nbsp;&nbsp;
        <FiMail onClick={scrollToContact} style={darkMode ? {"color":"#dcfe00f9"} : {"color":"#333333"}} />
      </Socials>
      <Container>
      <Main>
        <Splash darkMode={darkMode}/>
      </Main>
      <Projects darkMode={darkMode} />
      <Contact />
      </Container>
    </ThemeProvider>
  )
}

const mainBgColor = theme('mode', {
  light: 'white',
  dark: '#333333',
});

const containerBg = theme('mode', {
  light: 'rgba(0,216,254,1)',
  dark: '#222222',
});

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: ${containerBg};`

const Main = styled.div`
  background-color: ${mainBgColor};
  width: 100%;
  height: 96vh;
  margin: 0px;
  margin-top: 4px;
  transition: .3s`

const Button = styled.button`
  position: absolute;
  background: transparent;
  font-size:25px;
  border: none;
  cursor: pointer;
  right: 20px;
  top: 20px;`

const Socials = styled.button`
  position: absolute;
  background: transparent;
  font-size:25px;
  border: none;
  cursor: pointer;
  left: 20px;
  top: 20px;`

export default App
