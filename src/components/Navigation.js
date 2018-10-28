import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
  };

const Navigation = (props) =>
    <div className={props.classes.root}>
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Typography variant="title" color="inherit" className={props.classes.grow}>
                    OpenModal
                </Typography>
                <Button color="inherit">The Project</Button>
                <Button color="inherit">Docs</Button>
                <Button color="inherit">Contribute</Button>
            </Toolbar>
        </AppBar>
    </div>


export default withStyles(styles)(Navigation)