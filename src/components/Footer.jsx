import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import { ReactComponent as TelegramIcon } from '../icons/telegram.svg'
import { ReactComponent as GithubIcon } from '../icons/github.svg'
import { ReactComponent as MailIcon } from '../icons/mail.svg'
import { ReactComponent as LinkedinIcon } from '../icons/linkedin.svg'

const useStyles = createUseStyles(theme => ({
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
        },
      },
    },
  },
}))

const Footer = () => {
  const classes = useStyles(useTheme())

  return (
    <footer className={classes.icons}>
      <GithubIcon />
      <LinkedinIcon />
      <TelegramIcon />
      <MailIcon />
    </footer>
  )
}

export default Footer
