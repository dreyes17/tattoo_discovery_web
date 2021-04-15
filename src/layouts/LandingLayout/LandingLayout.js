import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar/index'
import './LandingLayout.scss'


const LandingLayout = (props) => {

    const { lang, children } = props

    return (
        <div>
            <CssBaseline />
            <Navbar lang={lang}/>
            {children}
        </div>
    )
}

export default LandingLayout