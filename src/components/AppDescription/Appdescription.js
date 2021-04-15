import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import screenshotStyle from '../../static/screenshotImageInlineStyle'
import i18n from './i18n'

const SCREEN_HEIGHT = 400

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
    descBox1: {
        minHeight: '50vh',
        backgroundColor: "black",
        maxWidth: "100%",
        width: "100%"
    },
    descBox2: {
        minHeight: '50vh',
        backgroundColor: "white",
        maxWidth: "100%",
        width: "100%"
    },
    screenshot: {
        width: SCREEN_HEIGHT / 2,
        marginLeft: "auto",
        marginRight: "auto"
    },
    screenshotInfo: {
        marginLeft: "40px",
        marginRight: "40px",
        marginTop: "10px",
        marginBottom: "30px",
        textAlign: "center",
        textJustify: "center"
    },
    screenshotDesc: {
        marginTop: "15px",
        fontWeight: "normal"
    }
}))


export default function Appdescription(props) {

    const { lang } = props
    const classes = useStyles()
    console.log(props)
    console.log(lang)
    const descriptions = i18n[lang]["descriptions"]

    return (
        <Grid container className={classes.root} id="app-desc">
            <Grid item sm={12} md={6} className={classes.descBox1}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_1.png"} height={SCREEN_HEIGHT} />
                <div className={classes.screenshotInfo}>
                    <Typography variant="h4" component="h3" color="primary">
                        {descriptions[0]["title"]}
                    </Typography>
                    <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="primary">
                        {descriptions[0]["description"]}
                    </Typography>
                </div>
            </Grid>
            <Grid item sm={12} md={6} className={classes.descBox2}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_2.png"} height={SCREEN_HEIGHT} />
                <div className={classes.screenshotInfo}>
                    <Typography variant="h4" component="h3" color="textPrimary">
                        {descriptions[1]["title"]}
                    </Typography>
                    <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="textPrimary">
                        {descriptions[1]["description"]}
                    </Typography>
                </div>
            </Grid>
            <Hidden mdDown>
                <Grid item sm={12} md={6} className={classes.descBox2}>
                    <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_3.png"} height={SCREEN_HEIGHT} />
                    <div className={classes.screenshotInfo}>
                        <Typography variant="h4" component="h3" color="textPrimary">
                            {descriptions[2]["title"]}
                        </Typography>
                        <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="textPrimary">
                            {descriptions[2]["description"]}
                        </Typography>
                    </div>
                </Grid>
            </Hidden>
            <Grid item sm={12} md={6} className={classes.descBox1}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_4.png"} height={SCREEN_HEIGHT} />
                <div className={classes.screenshotInfo}>
                    <Typography variant="h4" component="h3" color="primary">
                        {descriptions[3]["title"]}
                    </Typography>
                    <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="primary">
                        {descriptions[3]["description"]}
                    </Typography>
                </div>
            </Grid>
            <Hidden lgUp>
                <Grid item sm={12} md={6} className={classes.descBox2}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_3.png"} height={SCREEN_HEIGHT} />
                    <div className={classes.screenshotInfo}>
                        <Typography variant="h4" component="h3" color="textPrimary">
                            {descriptions[2]["title"]}
                        </Typography>
                        <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="textPrimary">
                            {descriptions[2]["description"]}
                        </Typography>
                    </div>
                </Grid>
            </Hidden>
        </Grid>
    )
}
