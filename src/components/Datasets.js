import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import DataCard from './DataCard'
import CityData from '../utils/CityData'
import Typography from '@material-ui/core/Typography'

const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center'
    },
    title: {
        fontFamly: 'Raleway'
    }
}

const Datasets = (props) => {
    const { classes } = props
    return (
        <div className={classes.area}>
            <Typography align='center' color="textSecondary" variant="display1">Select a city:</Typography>
            <Grid container spacing={8}>
                {CityData.map((city, key) =>
                    <Grid key={key} item xs={12} lg={6}>
                        <DataCard city={city} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default withStyles(style)(Datasets)