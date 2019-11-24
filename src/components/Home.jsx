import React, { useState, useEffect, useContext } from 'react'
import FontFaceObserver from 'fontfaceobserver'
import { createUseStyles, useTheme } from 'react-jss'
import Toggle from 'react-toggle' 
import './Toggle.css'

import { ThemeContext } from '../context'
import content from '../constants'

import alviSrc from '../media/alvi.jpg'
import tonySrc from '../media/tony.jpg'
import { ReactComponent as TelegramIcon } from '../icons/telegram.svg'
import { ReactComponent as GithubIcon } from '../icons/github.svg'
import { ReactComponent as MailIcon } from '../icons/mail.svg'
import { ReactComponent as LinkedinIcon } from '../icons/linkedin.svg'
import { ReactComponent as CatIcon } from '../icons/cat.svg'

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.background,
    color: theme.color,
    minHeight: '100vh',
  },
  main: {
    width: 'calc(100% - 80px)',
    maxWidth: '700px',
    padding: '20px 40px',
    '& > *:not(:last-child)': {
      marginBottom: '20px'
    }
  },
  avatar: {
    borderRadius: '50%',
    height: '350px',
    width: '350px',
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '350px',
    minWidth: '350px',
  },
  title: {
    fontSize: '3em',
    textAlign: 'center',
    marginTop: 0,
  },
  icons: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      '& path': {
        fill: theme.color,
      },
      '&:hover': {
        '& path': {
          fill: theme.hover,
        }
      }
    }
  },
  toggleLabel: {
    display: 'flex',
  },
  spacer: {
    flexGrow: 1,
  },
  catIcon: {
    transform: 'scale(0.75) translate(-5px, -4px)',
  },
  article: {
    fontSize: '20px',
    marginBottom: '40px',
    textAlign: 'justify',
  },
  '@media (max-width: 350px)': {
    avatar: {
      height: '250px',
      width: '250px',
    },
    avatarSection: {
      minHeight: '250px',
      minWidth: '250px',
    },
    title: {
      fontSize: '3em',
    },
  },
}))


const Home = (props) => {
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false)
  const [isFontLoaded, setIfFontLoaded] = useState(false)
  const [theme, toggleTheme]  = useContext(ThemeContext)
  const classes = useStyles(useTheme())
  
  useEffect(() => {
    // prevent content flashes
    const alviAvatar  = new Image
    const tonyAvatar = new Image
    alviAvatar.onload = () => setIsAvatarLoaded(true)
    alviAvatar.src = alviSrc
    tonyAvatar.src = tonySrc

    const font = new FontFaceObserver('Quicksand')
    font.load().then(() => setIfFontLoaded(true))
  }, [])

  return isAvatarLoaded && isFontLoaded && (
    <div className={classes.container}>
      <main className={classes.main}>
        <label className={classes.toggleLabel}>
          <div className={classes.spacer} />
          <Toggle
            defaultChecked={false}
            icons={{
              checked: null,
              unchecked: <CatIcon className={classes.catIcon}/>,
            }}
            onChange={toggleTheme} />
        </label>
        <section className={classes.avatarSection}>
        {theme === 'alvi' && <img className={classes.avatar} src={alviSrc} alt='Alvi Ayubov' />}
        {theme === 'tony' && <img className={classes.avatar} src={tonySrc} alt='Tony Ayubov' />}
        </section>
        <h1 className={classes.title}>{content[theme].name}</h1>
        <article className={classes.article}>
          {content[theme].description}
        </article>
        {theme === 'alvi' && (<footer className={classes.icons}>
          <GithubIcon />
          <LinkedinIcon />
          <TelegramIcon />
          <MailIcon />
        </footer>)}
      </main>
    </div>
  )
}

export default Home
