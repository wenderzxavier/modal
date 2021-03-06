import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
    card: {
        margin: 10,
    },
    cardSelected: {
        margin: 10,
        border: 'red',
    },
    media: {
        height: 140,
    },
    data: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        align: 'center'
    },
}

const DataCard = (props) => {
    const { classes, city } = props
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={city.cover}
                    title={city.name}
                    alt={city.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {city.name}
                    </Typography>
                    <Typography component="p">
                        {city.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div>
                    {city.data.map((data, key) => (
                        <Button key={key} size="small" disabled className={{ backgroundColor: data.color }}>
                            {data.icon} {data.type}
                        </Button>
                    ))}
                </div>
            </CardActions>
        </Card>
    )
}

export default withStyles(style)(DataCard)