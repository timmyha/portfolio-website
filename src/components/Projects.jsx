import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Crashpad from './projects/Crashpad'
import GithubSearch from './projects/GithubSearch'
import PresentDay from './projects/PresentDay'
import { FaReact, FaJs, FaCss3 } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'
import { SiFirebase, SiVite } from 'react-icons/si'
import { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import { AiFillGithub } from 'react-icons/ai'


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

  const projectColor = darkMode ? "#333333" : "white"

  return (
    <ThemeProvider theme={darkMode
      ? { mode: 'dark' }
      : { mode: 'light' }}>
    <Container
      style={darkMode
        ? { "background": `${darkBgColor}` }
        : { "background": `${bgColor}` }}>
      <ProjectsArrow
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
      {showProjects
        ? <div style={{ "opacity": "0" }}>
          <Crash>
            <Crashpad />
          </Crash>
          <GithubSearch />
          <PresentDay />
        </div>
        : <div style={{ "opacity": "1", "transition": ".5s" }}>
          <Crash>
            <Crashpad />
            <Details>
              <Desc>
                Crashpad, a marketplace providing short-term housing for vagrants.
              </Desc>
              <Icons>
                <FaJs />&nbsp;<FaReact />&nbsp;<SiStyledcomponents />&nbsp;<SiFirebase />&nbsp;<SiVite />
              </Icons>
              <Links>
              <Button onClick={() => window.location.href='http://crashpad.vercel.app'} 
                      style={{"color":"#00d8fe", "textDecoration":"none"}}>
              Demo</Button>
              <Button onClick={() => window.location.href='https://github.com/timmyha/crashpad'} 
                      style={{"color":"#00d8fe", "textDecoration":"none"}}>
              <AiFillGithub /></Button>
              </Links>
            </Details>
          </Crash>
          <Reverse>
            <GithubSearch />
            <Details>
              <Desc>
              Search users and view profiles via the Github API.
              </Desc>
              <Icons>
              <FaJs />&nbsp;<FaReact />&nbsp;<SiStyledcomponents />&nbsp;<SiVite />
              </Icons>
              <Links>
              <Button onClick={() => window.location.href='http://github-search-timmyha.vercel.app'} 
                      style={{"color":"#00d8fe", "textDecoration":"none"}}>
              Demo</Button>
              <Button onClick={() => window.location.href='https://github.com/timmyha/github-search'} 
                      style={{"color":"#00d8fe", "textDecoration":"none"}}>
              <AiFillGithub /></Button>
              </Links>
            </Details>
          </Reverse>
          <Crash>
            <PresentDay />
            <Details>
              <Desc>
                A browser new-tab dashboard granting quick access to bookmarks and
                smart searching.
              </Desc>
              <Icons>
              <FaJs />&nbsp;<FaReact />&nbsp;<FaCss3 />
              </Icons>
              <Links>
              <Button onClick={() => window.location.href='http://presentday.vercel.app'} 
                      style={{"color":"#00d8fe", "textDecoration":"none"}}>
              Demo</Button>
              <Button onClick={() => window.location.href='https://github.com/timmyha/startpage'} 
                      style={{"color":"#00d8fe", "textDecoration":"none"}}>
              <AiFillGithub /></Button>
              </Links>
            </Details>
          </Crash>
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

const Reverse = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 700px;
    margin: auto;
    margin-bottom: 100px;
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100vw;
      }`

const Details = styled.div`
display: flex;
flex-direction: column;
margin: auto;
justify-content: center;`

const Desc = styled.span`
  display: flex;
  font-size: 30px;
  font-family: IBM Plex Sans;
  width: 370px;
  margin: auto;
  align-self: center;
  text-align: center;
    @media (max-width: 500px) {
      margin: auto;
  }`

const Icons = styled.span`
  font-size: 30px;
  font-family: IBM Plex Sans;
  width: 370px;
  padding-top: 20px;
  text-align: center;
    @media (max-width: 500px) {
      margin: auto;
  }`

const Links = styled.span`
  display: flex;
  font-size: 15px;
  font-family: IBM Plex Sans;
  margin: auto;
  margin-top: 20px;
  align-self: center;
  text-align: center;`

const Button = styled.div`
  border: none;
  background-color: #333333;
  padding: 10px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
    &:hover {
      background-color: #555555;
      transition: .2s;
    }`

const ProjectsArrow = styled.div`
  position: absolute;
  bottom: 4px;
  left: 10px;
  font-size: 20px;
  font-family: rubik;
  opacity: 1;
  transition: .5s;`

export default Projects