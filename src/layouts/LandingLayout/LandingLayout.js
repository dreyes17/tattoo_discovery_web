import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar'
import './LandingLayout.scss'


const LandingLayout = (props) => {

    const { children } = props

    return (
        <div>
            <CssBaseline />
            <Navbar />
            {children}
        </div>
    )
}

export default LandingLayout