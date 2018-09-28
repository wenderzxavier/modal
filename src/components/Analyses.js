import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center'
    }
}

const Analyses = (props) => {
    const { classes } = props
    return (
        <div className={classes.area}>
            <h1>This is me</h1>
        </div>
    )
}

export default withStyles(style)(Analyses)