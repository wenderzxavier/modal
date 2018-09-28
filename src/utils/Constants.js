import React from 'react'
import TrainIcon from '@material-ui/icons/Train'
import MetroIcon from '@material-ui/icons/Subway'
import BusIcon from '@material-ui/icons/DirectionsBus'
import TramIcon from '@material-ui/icons/Tram'
import BikeIcon from '@material-ui/icons/DirectionsBike'

const BUS = {
    type: 'Bus',
    color: 'blue',
    icon: <BusIcon />
}

const TRAIN = {
    type: 'Train',
    color: 'red',
    icon: <TrainIcon />
}

const TRAM = {
    type: 'Tram',
    color: 'yellow',
    icon: <TramIcon />
}

const BIKE = {
    type: 'Bike',
    color: 'green',
    icon: <BikeIcon />
}

const METRO = {
    type: 'Metro',
    color: 'brown',
    icon: <MetroIcon />
}

export { BUS, TRAIN, TRAM, BIKE, METRO }