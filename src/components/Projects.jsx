import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Crashpad from './projects/Crashpad'
import GithubSearch from './projects/GithubSearch'
import PresentDay from './projects/PresentDay'
import Sorry from './projects/Sorry'
import { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'


const Projects = ({ darkMode }) => {

  const [bgColor, setBgColor] = useState(`#fe00c7`)
  const [darkBgColor, setDarkBgColor] = useState(`#f0ff94`)
  const [arrowShow, setArrowShow] = useState(true)
  const [showProjects, setShowProjects] = useState(true)

  const controlBgColor = () => {
    window.scrollY > 100
      && setArrowShow(!arrowShow)
    window.scrollY > 501
      && setShowProjects(!showProjects)
    window.scrollY > 500
      && setBgColor(`transparent`)
    window.scrollY > 500
      && setDarkBgColor('transparent')
  };

  useEffect(() => {
    window.addEventListener('scroll', controlBgColor);

    return () => {
      window.removeEventListener('scroll', controlBgColor);
    };
  }, []);

  const scrollToProjects = () => {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: 'smooth'
    });
  }

  const projectColor = darkMode ? "#333333" : "white"

  return (
    <ThemeProvider theme={ darkMode
      ? { mode: 'dark' }
      : { mode: 'light' }}>
      <Container
        style={darkMode
          ? { "background": `${darkBgColor}` }
          : { "background": `${bgColor}` }}>
        <ProjectsArrow
          onClick={scrollToProjects}
          style={arrowShow
            ? { "display": "flex", "color": `${projectColor}` }
            : { "opacity": "0", }}>
          projects <AiOutlineArrowDown
            style={{
              "position": "absolute",
              "bottom": "2px",
              "left": "100px"
            }} />
        </ProjectsArrow>
        { showProjects
          ? <div style={{ "opacity": "0" }}>
              <Crashpad />
              <GithubSearch />
              <PresentDay />
          </div>
          : <div style={{ "opacity": "1", "transition": ".5s" }}>
              <Crashpad darkMode={darkMode} />
              <GithubSearch darkMode={darkMode} />
              <Sorry darkMode={darkMode} />
              <PresentDay darkMode={darkMode} />
          </div>
        }
      </Container>
    </ThemeProvider>
  )
}

const primaryText = theme('mode', {
  light: '#333333',
  dark: '#f0ff94',
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  color: ${primaryText};
  padding-top: 200px;
  padding-bottom: 30px;
  transition: .7s;`

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
    }`

const ProjectsArrow = styled.div`
  position: absolute;
  bottom: 4px;
  left: 10px;
  font-size: 20px;
  font-family: rubik;
  opacity: 1;
  transition: .5s;
  cursor: pointer;`

export default Projects