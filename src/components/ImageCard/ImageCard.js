import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'gatsby-theme-material-ui'
import { StaticImage } from 'gatsby-plugin-image'
import infos from '../../static/infos'
import Typography from '@material-ui/core/Typography';
import "@fontsource/lily-script-one"
import './ImageCard.scss'
import { Collapse, Box } from '@material-ui/core';
import screenshotStyle from '../../static/screenshotImageInlineStyle'
import { Link as Scroll } from "react-scroll"

const CARD_HEIGHT = 440

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: 'rgba(0,0,0,0.2)',
    margin: '20px',
    borderRadius: "15px 50px 30px 5px;"
  },
  media: {
      height: CARD_HEIGHT,
      backgroundColor: "black",
      display: "flex",
      alignItems: "center",
  },
  title: {
      fontWeight: "bold",
      fontSize: "2rem"
  },
  description: {
      fontSize: '1.1rem'
  },
  screenshot: {
    margin: "auto",
    width: "fit-content",
  },
  iconText: {
    fontFamily: "Lily Script One"
  },
  iconBackground: {
    borderRadius: 25,
    margin: "auto",
  },
  cardContent: {
    backgroundColor: "white",
    borderWidth: "2px",
    borderColor: "black"
  },
  cardActions: {
    backgroundColor: "white",
    borderWidth: "2px",
    borderColor: "black"
  }
});

export default function ImageCard({ checked }) {
  const classes = useStyles();

  return (
    <>
        <Collapse in={checked} { ...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia height={CARD_HEIGHT} className={classes.media}>
                    <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_1.png"} alt={infos[1].title} height={CARD_HEIGHT} />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {infos[1].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {infos[1].description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Scroll to="app-desc" smooth={true}>
                        <Button size="small">Learn More</Button>
                    </Scroll>
                </CardActions>
            </Card>
        </Collapse>
        <Collapse in={checked} { ...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia height={CARD_HEIGHT} className={classes.media}>
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
                        className={classes.iconText}>
                        TD
                        </Typography>
                    </Box>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {infos[0].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {infos[0].description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Scroll to="app-promotion" smooth={true} duration={1200}>
                        <Button size="small">Learn More</Button>
                    </Scroll>
                </CardActions>
            </Card>
        </Collapse>
        <Collapse in={checked} { ...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia height={CARD_HEIGHT} className={classes.media}>
                    <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_5.png"} alt={infos[1].title} height={CARD_HEIGHT} />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {infos[2].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {infos[2].description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Scroll to="app-map" smooth={true} duration={1000}>
                        <Button size="small">Learn More</Button>
                    </Scroll>
                </CardActions>
            </Card>
        </Collapse>
    </>
  );
}
