import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import '../styles/App.css'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const style = {
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    card: {
        maxWidth: 245,
    },

}

const Division = (props) => {
    const { classes } = props
    return (
        <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12} sm={4}>
                    <Card className={classes.card} xs={6}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                height="60"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Lizard
          </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card} xs={6}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                height="60"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Lizard
          </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>

            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <h1>This is me!</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <h1>This is me!</h1>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Division)