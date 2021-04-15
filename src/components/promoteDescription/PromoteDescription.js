import React from 'react'
import { ReactComponent as TattooMachine } from '../../images/tattoo_machine.svg'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import i18n from './i18n'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
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
        maxWidth: "70%",
        width: "70%",
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
        fontSize: "1.8rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem"
        }
    },
    img: {
        display: "block",
        margin: "auto",
        width: 288,
        height: 288,
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
        fontSize: "1.6rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
            paddingBottom: "10px"
        }
    }
}))


export default function PromoteDescription(props) {

    const { lang } = props
    const classes = useStyles()
    const title = i18n[lang]["title"]
    const outro1 = i18n[lang]["outro1"]
    const outro2 = i18n[lang]["outro2"]
    const points = i18n[lang]["points"]

    return (
        <Grid container className={classes.root} id="app-promotion">
            <Grid item sm={12} md={6} className={classes.descBox1}>
                <TattooMachine className={classes.img} />
            </Grid>
            <Grid item sm={12} md={6} className={classes.descBox2} alignItems="center" justify="center">
                <div>
                    <Typography className={classes.mapTitle} variant="h3" color="textPrimary">
                        {title}
                    </Typography>
                    <Typography className={classes.mapDesc} variant="h5" component="h4" color="textPrimary">
                       {outro1} <br /> <span style={{fontWeight: "bold"}}>palmsintelligence@gmail.com</span><br /><br /> {outro2} 
                    </Typography>
                    <ul>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="textPrimary">
                                {points[0]}
                            </Typography>
                        </li>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="textPrimary">
                                {points[1]}
                            </Typography>
                        </li>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="textPrimary">
                                {points[2]}
                            </Typography>
                        </li>
                        <li className={classes.listPoint}>
                            <Typography className={classes.mapDesc} variant="h5" component="h4" color="textPrimary">
                                {points[3]}
                            </Typography>
                        </li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    )
}
