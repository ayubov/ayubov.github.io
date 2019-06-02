import React from "react";
import injectSheet from "react-jss";
import avatar from "../media/amsterdam.jpeg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as LinkedinIcon } from "../icons/linkedin.svg";

const styles = {
  container: {
    border: "1px solid black",
    padding: "20px 40px",
    "& div:not(:last-child)": {
      marginBottom: "20px"
    }
  },
  avatar: {
    borderRadius: "50%",
    height: "50%",
    width: "50%"
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: "3em",
    textAlign: "center"
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

const Home = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.avatarContainer}>
      <img className={classes.avatar} src={avatar} alt="Alvi Ayubov" />
    </div>
    <div className={classes.title}>Alvi Ayubov</div>
    <div className={classes.textContent}>
      I'm Alvi. I work as Frontend Developer at NetUP in Moscow. I have a good
      experience at making apps with modern techniques. I love programming,
      reading, sport and travelling.
    </div>
    <div className={classes.icons}>
      <GithubIcon />
      <LinkedinIcon />
      <TelegramIcon />
      <MailIcon />
    </div>
  </div>
);

export default injectSheet(styles)(Home);
