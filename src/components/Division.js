import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Datasets from './Datasets'
import Analyses from './Analyses'
import Typography from '@material-ui/core/Typography'
import Results from './Results'
import '../styles/App.css'


const style = {
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
}

const Division = (props) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                <Grid item sm={12} lg={4}>
                    <Typography align='center' color="textSecondary" variant="title">Select a city:</Typography>
                    <Datasets />
                </Grid>
                <Grid item sm={12} lg={4}>
                <Typography align='center' color="textSecondary" variant="title">Select an Analysis to Perform on Data:</Typography>
                    <Analyses />
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Typography align='center' color="textSecondary" variant="title">Results:</Typography>
                    <Results />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(style)(Division)