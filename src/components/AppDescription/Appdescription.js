import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import screenshotStyle from '../../static/screenshotImageInlineStyle'

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


export default function Appdescription() {

    const classes = useStyles()

    return (
        <Grid container className={classes.root} id="app-desc">
            <Grid item sm={12} md={6} className={classes.descBox1}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_1.png"} height={SCREEN_HEIGHT} />
                <div className={classes.screenshotInfo}>
                    <Typography variant="h4" component="h3" color="primary">
                        +3000 Tattoo Designs
                    </Typography>
                    <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="primary">
                        Tattoo Discovery is a huge collection of art from differents tattoo artists around the world.
                    </Typography>
                </div>
            </Grid>
            <Grid item sm={12} md={6} className={classes.descBox2}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_2.png"} height={SCREEN_HEIGHT} />
                <div className={classes.screenshotInfo}>
                    <Typography variant="h4" component="h3" color="textPrimary">
                        Artificial Intelligence
                    </Typography>
                    <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="textPrimary">
                        Every tattoo is grouped with its most similar tattoos using cutting-edge artificial intelligence.
                    </Typography>
                </div>
            </Grid>
            <Hidden mdDown>
                <Grid item sm={12} md={6} className={classes.descBox2}>
                    <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_3.png"} height={SCREEN_HEIGHT} />
                    <div className={classes.screenshotInfo}>
                        <Typography variant="h4" component="h3" color="textPrimary">
                            Do Advanced Searches
                        </Typography>
                        <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="textPrimary">
                            Look for the most liked tattoo by the community, among other exciting options.
                        </Typography>
                    </div>
                </Grid>
            </Hidden>
            <Grid item sm={12} md={6} className={classes.descBox1}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_4.png"} height={SCREEN_HEIGHT} />
                <div className={classes.screenshotInfo}>
                    <Typography variant="h4" component="h3" color="primary">
                        Tattoo Discovery Profile
                    </Typography>
                    <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="primary">
                        Recover your liked and commented tattoos and upload your own designs.
                    </Typography>
                </div>
            </Grid>
            <Hidden lgUp>
                <Grid item sm={12} md={6} className={classes.descBox2}>
                <StaticImage className={classes.screenshot} style={screenshotStyle} src={"../../images/screenshot_3.png"} height={SCREEN_HEIGHT} />
                    <div className={classes.screenshotInfo}>
                        <Typography variant="h4" component="h3" color="textPrimary">
                            Do Advanced Searches
                        </Typography>
                        <Typography className={classes.screenshotDesc} variant="h6" component="h4" color="textPrimary">
                            Look for the most liked tattoo by the community, among other exciting options.
                        </Typography>
                    </div>
                </Grid>
            </Hidden>
        </Grid>
    )
}
