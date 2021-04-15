import React from 'react'
import { graphql, Link, useStaticQuery} from "gatsby"
import { makeStyles, Typography, Grid, Box, Hidden, Collapse, Fab} from '@material-ui/core'
import { IconButton, Button } from 'gatsby-theme-material-ui'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "@fontsource/lily-script-one"
import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll"
import AdbIcon from '@material-ui/icons/Adb';
import AppleIcon from '@material-ui/icons/Apple';
import i18n from './i18n';
import { IconFlagES, IconFlagUS } from 'material-ui-flags';


const androidUrl = 'https://play.google.com/store/apps/details?id=com.tattoo_discovery.design';
const iosUrl = 'https://apps.apple.com/app/id1552751805';
const query = graphql`
  query {
      image: file(relativePath: {eq: "wallpaper.jpg"}) {
          sharp: childImageSharp {
              fluid(maxWidth: 3080, quality: 50) {
                  src
              }
          }
      }
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  firstPage: {
    minHeight: "100vh",
    textAlign: "center",
  },
  firstPageText: {
    fontFamily: "Lily Script One"
  },
  iconBackground: {
    borderRadius: 25,
    marginBottom: "0.75rem", 
    marginTop: "1.5rem"
  },
  goDown: {
    color: "white",
    fontSize: "3.5rem",
    marginTop: "0rem"
  },
  button: {
    marginLeft: "20px", 
    marginRight: "20px",
    marginTop: "20px",
    width: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "115px",
      marginLeft: "15px", 
      marginRight: "15px",
      marginTop: "15px",
    }
  },
  floatingButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}))

export default function Header(props) {

    const  { lang } = props
    const welcome = i18n[lang]["welcome"]
    const name = i18n[lang]["name"]
    const data = useStaticQuery(query) 
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    const linkLang = lang === "en" ? "es" : ""

    useEffect(() => {
      setChecked(true)
    }, [])

    return (
        <div className={classes.root} style={{backgroundImage: `url(${data.image.sharp.fluid.src})`}} id="header">
        <Collapse 
          in={checked} 
          { ... (checked ? { timeout: 1250 } : {})}  
          collapsedHeight={50}
        >
          <Grid container
            justify="center"
            alignItems="center"
            alignContent="center"
            className={classes.firstPage}>
            <Grid container item 
              justify="center"
              alignItems="center"
              alignContent="center"
              direction="row"
              xs={12}>
              <Box 
                display="flex" 
                width={160} height={160} 
                bgcolor="white"
                alignItems="center"
                justifyContent="center"
                className={classes.iconBackground}
              >
                <Typography 
                  variant="h1"
                  component="h2" 
                  color="textPrimary" 
                  fontWeight="fontWeightBold" 
                  className={classes.firstPageText}>
                  TD
                </Typography>
              </Box>
            </Grid>
            <Grid container item 
              justify="center"
              alignItems="center"
              alignContent="center"
              direction="row"
              xs={12}>
              <Hidden smUp>
                <Typography variant="h3" component="h2" color="primary" fontWeight="fontWeightBold" className={classes.firstPageText}>
                  {welcome} <br /> {name}
                </Typography>
              </Hidden>
              <Hidden xsDown>
                <Typography variant="h2" color="primary" fontWeight="fontWeightBold" className={classes.firstPageText}>
                {welcome} <br /> {name}
                </Typography>
              </Hidden>
            </Grid>
            <Grid container item 
              justify="center"
              alignItems="center"
              alignContent="center"
              direction="row"
              xs={12}>
                <a href={androidUrl} rel="noreferrer nofollow noopener noindex" target="_blank">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AdbIcon />}
                    className={classes.button}
                  >
                    Android
                  </Button>
                </a>
                <a href={iosUrl} rel="noreferrer nofollow noopener noindex" target="_blank">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AppleIcon />}
                    className={classes.button}
                  >
                    iOS
                  </Button>
                </a>
            </Grid>
            <Grid container item 
              justify="center"
              alignItems="center"
              alignContent="center"
              direction="row"
              xs={12}>
              <Scroll to="app-info" smooth={true}>
                <IconButton aria-label="App info">
                  <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
              </Scroll>
            </Grid>
          </Grid>
          <Link to={"/" + linkLang}>
            <Fab color="primary" aria-label="language" className={classes.floatingButton}>
              {lang === "es" ? <IconFlagUS /> : <IconFlagES />}
            </Fab>
          </Link>
        </Collapse>
      </div>
    )
}
