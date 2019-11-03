import React, { useState, useEffect } from "react";
import injectSheet from "react-jss";
import FontFaceObserver from 'fontfaceobserver'; 

import avatarSrc from "../media/amsterdam.jpeg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as LinkedinIcon } from "../icons/linkedin.svg";

const styles = {
  main: {
    border: "1px solid black",
    padding: "20px 40px",
    "& > *:not(:last-child)": {
      marginBottom: "20px"
    }
  },
  avatar: {
    borderRadius: "50%",
    height: "50%",
    width: "50%"
  },
  avatarSection: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: "3em",
    textAlign: "center",
    marginTop: 0,
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    "& svg": {
      "&:hover": {
        "& path": {
          fill: "rgba(0,0,0,0.2)"
        }
      }
    }
  }
};

const Home = ({ classes }) => {
  const [ isAvatarLoaded, setIsAvatarLoaded ] = useState(false);
  const [ isFontLoaded, setIfFontLoaded ] = useState(false);
  
  useEffect(() => {
    // prevent content flashes
    const avatar  = new Image;
    avatar.onload = () => setIsAvatarLoaded(true);
    avatar.src = avatarSrc;

    const font = new FontFaceObserver('Titillium Web');
    font.load().then(() => setIfFontLoaded(true));
  }, [])

  return isAvatarLoaded && isFontLoaded && (
    <main className={classes.main}>
    <section className={classes.avatarSection}>
      <img className={classes.avatar} src={avatarSrc} alt="Alvi Ayubov" />
    </section>
    <h1 className={classes.title}>Alvi Ayubov</h1>
    <article className={classes.textContent}>
      I'm Alvi. I work as Frontend Developer at Rambler&CO in Moscow. I have a good
      experience at making apps with modern techniques. I love programming,
      reading, sport and travelling.
    </article>
    <footer className={classes.icons}>
      <GithubIcon />
      <LinkedinIcon />
      <TelegramIcon />
      <MailIcon />
    </footer>
  </main>
  )
}

export default injectSheet(styles)(Home);
