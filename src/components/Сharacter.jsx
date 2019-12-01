import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import { useImage } from '../hooks'

const useStyles = createUseStyles({
  avatar: {
    borderRadius: '50%',
    height: '350px',
    width: '350px',
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    minHeight: '350px',
    minWidth: '350px',
  },
  title: {
    fontSize: '3em',
    textAlign: 'center',
    marginTop: 0,
  },
  article: {
    fontSize: '20px',
    textAlign: 'justify',
  },
  '@media (max-width: 450px)': {
    avatar: {
      height: '100%',
      width: '100%',
    },
    avatarSection: {
      marginTop: '40px',
      minHeight: '50%',
      minWidth: '50%',
    },
    title: {
      fontSize: '3em',
    },
  },
})


const Character = ({ img, fallbackImg, name, description }) => {
  const src = useImage({ src: img, fallbackSrc: fallbackImg });
  const classes = useStyles(useTheme())

  return (
    <>
      <section className={classes.avatarSection}>
        <img className={classes.avatar} src={src} alt={name} />
      </section>
      <h1 className={classes.title}>{name}</h1>
      <article className={classes.article}>
        {description}
      </article>
    </>
  )
}

export default Character
