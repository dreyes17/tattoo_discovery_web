import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from '../ImageCard'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    }
}))

export default function AppInfo(props) {

    const { lang } = props

    const classes = useStyles()

    return (
        <div className={classes.root} id="app-info">
            <ImageCard lang={lang} />
        </div>
    )
}
