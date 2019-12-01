import React, { useState, useEffect, useContext } from 'react'
import FontFaceObserver from 'fontfaceobserver'
import { createUseStyles, useTheme } from 'react-jss'

import { ThemeContext } from '../context'
import content from '../content'
import Character from './Сharacter'
import Footer from './Footer'
import Toggle from './Toggle'

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.background,
    color: theme.color,
    minHeight: '100vh',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'calc(100% - 80px)',
    maxWidth: '700px',
    padding: '20px 40px',
    '& > *:not(:last-child)': {
      marginBottom: '20px',
    },
  },
}))


const Home = () => {
  const [isFontLoaded, setIfFontLoaded] = useState(false)
  const [theme, toggleTheme] = useContext(ThemeContext)
  const classes = useStyles(useTheme())

  useEffect(() => {
    // prevent content flashes
    const font = new FontFaceObserver('Quicksand')
    font.load().then(() => setIfFontLoaded(true))
  }, [])

  return isFontLoaded && (
    <div className={classes.container}>
      <main className={classes.main}>
        <Toggle toggleTheme={toggleTheme} />
        <Character {...content[theme]} />
        {theme === 'alvi' && <Footer />}
      </main>
    </div>
  )
}

export default Home
