import React from 'react'
import { Button } from 'gatsby-theme-material-ui'
import AdbIcon from '@material-ui/icons/Adb';
import AppleIcon from '@material-ui/icons/Apple';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const androidUrl = 'https://play.google.com/store/apps/details?id=com.tattoo_discovery.design';
const iosUrl = 'https://apps.apple.com/app/id1552751805';
const instagramUrl = 'https://www.instagram.com/tattoo_discovery/'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
    },
    button: {
        margin: "30px",
        width: "200px",
        [theme.breakpoints.down("md")]: {
            width: "120px",
            marginLeft: "5px",
            marginRight: "5px",
            marginTop: "10px",
            marginBottom: "10px",
        }
    }
}))


export default function MapDescription() {

    const classes = useStyles()

    return (
        <Grid container className={classes.root} id="app-map">
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
            <a href={instagramUrl} rel="noreferrer nofollow noopener noindex" target="_blank">
                <Button
                variant="contained"
                color="primary"
                startIcon={<InstagramIcon />}
                className={classes.button}
                >
                Instagram
                </Button>
            </a>
        </Grid>
    )
}
