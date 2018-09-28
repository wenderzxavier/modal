import React from 'react'
import { withStyles} from '@material-ui/core/styles'

const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center'
    }
}

const Results = (props) => {
    const { classes } = props
    return (
        <div className={classes.area}>
            <h1>TODO Panel</h1>
        </div>
    )
}

export default withStyles(style)(Results)