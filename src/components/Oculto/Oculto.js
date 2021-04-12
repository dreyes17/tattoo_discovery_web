import React from 'react'
import { Button } from 'gatsby-theme-material-ui'
import { withWidth, Hidden, Typography } from '@material-ui/core'
import './Oculto.scss'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Width: {props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>

            <Hidden smDown>
                <Button variant="contained" color="primary">
                  sm
                </Button>
            </Hidden>

            <Hidden mdUp>
                <Button variant="contained" color="primary">
                  md
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)