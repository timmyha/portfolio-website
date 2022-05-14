import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'


const Splash = ({ darkMode }) => {
  const thoughts = `https://twitter.com/tmthyha`
  const photos = `https://instagram.com/fordf150fansonly`
  const film = `https://letterboxd.com/timmyha`
  const link = darkMode === true ? 'dark' : 'light'

  return (
    <ThemeProvider theme={darkMode
      ? { mode: 'dark' }
      : { mode: 'light' }}>
    <TitleContent>timothy hansher is a web
     developer in brooklyn, nyc who 
    builds <a className={link} style={{"cursor":"pointer"}}
             onClick={() => console.log('hi')}>apps</a>, 
    tweets his inner <a className={link} href={thoughts}>thoughts</a>, 
    snaps <a className={link} href={photos}>photos</a>, and logs
    every <a className={link} href={film}>film</a> he watches. 
     </TitleContent>
     </ThemeProvider>
  )
}

const primaryText = theme('mode', {
  light: '#333333',
  dark: '#f9f9f9',
});

const TitleContent = styled.div`
  text-align: justify;
  font-family: IBM Plex Sans;
  font-size: 45px;
  max-width: 500px;
  color: ${primaryText};
  line-height: 70px;
  letter-spacing: -3px;
  margin: auto;
  padding-top: 200px;
    @media(max-width: 550px) {
      font-size: 30px;
      width: 350px;
    }`

export default Splash