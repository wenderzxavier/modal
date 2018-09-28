import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Datasets from './Datasets'
import Analyses from './Analyses'
import Results from './Results'
import '../styles/App.css'


const style = {
    root: {
        flexGrow: 1,
    },
}

const Division = (props) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                <Grid item sm={12} lg={4}>
                    <Datasets />
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Analyses />
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Results />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(style)(Division)