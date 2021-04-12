import * as React from "react"
import { graphql, useStaticQuery} from "gatsby"
import { makeStyles, Typography, Grid, Box, Hidden, Collapse} from '@material-ui/core'
import { IconButton } from 'gatsby-theme-material-ui'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "@fontsource/lily-script-one"
import { useState, useEffect } from "react";
import LandingLayout from "../layouts/LandingLayout";
import AppInfo from "../components/AppInfo"
import { Link as Scroll } from "react-scroll"
import AppDescription from "../components/AppDescription";
import MapDescription from "../components/MapDescription/MapDescription";
import PromoteDescription from "../components/promoteDescription";

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
const useStyles = makeStyles((_) => ({
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
    marginBottom: "0.75rem"
  },
  goDown: {
    color: "white",
    fontSize: "3.5rem",
    marginTop: "1rem"
  }
}))

export default function IndexPage() {


  const data = useStaticQuery(query)
  

  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <LandingLayout>
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
                  Welcome to <br /> Tattoo Discovery
                </Typography>
              </Hidden>
              <Hidden xsDown>
                <Typography variant="h2" color="primary" fontWeight="fontWeightBold" className={classes.firstPageText}>
                  Welcome to <br /> Tattoo Discovery
                </Typography>
              </Hidden>
            </Grid>
            <Grid container item 
              justify="center"
              alignItems="center"
              alignContent="center"
              direction="row"
              xs={12}>
              <Scroll to="app-info" smooth={true}>
                <IconButton>
                  <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
              </Scroll>
            </Grid>
          </Grid>
        </Collapse>
      </div>
      <AppInfo />
      <AppDescription />
      <MapDescription />
      <PromoteDescription />
    </LandingLayout>
  )
}

