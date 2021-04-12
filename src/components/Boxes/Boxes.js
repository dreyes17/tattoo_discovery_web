import React from 'react'
import { Box, Grid } from '@material-ui/core'

export default function Boxes() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={2}>
                        xs12
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={2}>
                        xs12
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
