import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from '../ImageCard'
import useWindowPosition from '../../hooks/useWindowPosition'

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

export default function AppInfo() {
    const classes = useStyles()
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root} id="app-info">
            <ImageCard checked={checked} />
        </div>
    )
}
