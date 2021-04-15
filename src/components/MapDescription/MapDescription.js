import React from 'react'
import { ReactComponent as Map } from '../../images/map.svg'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import i18n from './i18n'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        minHeight: "50vh",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
    descBox1: {
        maxWidth: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    descBox2: {
        maxWidth: "100%",
        width: "100%",
        padding: "50px",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "30px",
            paddingTop: "0px"
        }
    },
    listPoint: {
        color: "white", 
        fontSize: "1.8rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem"
        }
    },
    mapImg: {
        display: "block",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            marginDown: "0px",
            marginTop: "20px"
        }
    },
    mapTitle: {
        fontSize: "3rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "2.125rem",
            textAlign: "center"
        }
    },
    mapDesc: {
        display: "block",
        margin: "auto",
        fontWeight: "normal",
        fontSize: "1.8rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
            paddingBottom: "10px"
        }
    }
}))


export default function MapDescription(props) {

    const { lang } = props
    const classes = useStyles()
    const title = i18n[lang]["title"]
    const points = i18n[lang]["points"]

    return (
        <Grid container className={classes.root} id="app-map">
            <Grid item sm={12} md={6} className={classes.descBox1}>
                <Map className={classes.mapImg} />
            </Grid>
            <Grid item sm={12} md={6} className={classes.descBox2} alignItems="center" justify="center">
                <div>
                    <Typography className={classes.mapTitle} variant="h3" color="primary">
                        {title}
                    </Typography>
                    <ul>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="primary">
                                {points[0]}
                            </Typography>
                        </li>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="primary">
                                {points[1]}
                            </Typography>
                        </li>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="primary">
                                {points[2]}
                            </Typography>
                        </li>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="primary">
                                {points[3]}
                            </Typography>
                        </li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    )
}
