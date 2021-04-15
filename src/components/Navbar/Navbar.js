import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, Typography, IconButton } from '@material-ui/core'
import AdbIcon from '@material-ui/icons/Adb';
import AppleIcon from '@material-ui/icons/Apple';
import "@fontsource/lily-script-one"
import './Navbar.scss'
import { Link } from "gatsby"

const smallDownloadButtonFontSize = "0.7rem"
const bigDownloadButtonFontSize = "3rem"
const androidUrl = 'https://play.google.com/store/apps/details?id=com.tattoo_discovery.design';
const iosUrl = 'https://apps.apple.com/app/id1552751805';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    paddingRight: "30px",
  },
  title: {
    flexGrow: "1",
    fontFamily: "Lily Script One",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      fontSize: bigDownloadButtonFontSize
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: smallDownloadButtonFontSize,
      padding: "6px"
    },
  },
  appbarWrapper: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto"
    },
  },
}));

export default function Navbar(props) {

  const { lang } = props

  const classes = useStyles();

  const [_, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const linkLang = lang === "en" ? "" : lang

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography variant="h1" className={classes.title}>
            <Link to={"/" + linkLang}>
              Tattoo Discovery
            </Link>
          </Typography>
          <a href={androidUrl} rel="noreferrer nofollow noopener noindex" target="_blank">
            <IconButton  
              variant="outlined" 
              color="secondary"
              aria-label="Android"
              onClick={handleClick}
              className={classes.menuButton}>
                <AdbIcon />
            </IconButton>
          </a>
          <a href={iosUrl} rel="noreferrer nofollow noopener noindex" target="_blank">
            <IconButton  
              variant="outlined" 
              color="secondary"
              aria-label="iOS"
              onClick={handleClick}
              className={classes.menuButton}>
                <AppleIcon />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
      {/*<Toolbar />*/}
    </>
  )
}
