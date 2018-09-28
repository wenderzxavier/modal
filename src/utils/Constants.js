import React from 'react'
import TrainIcon from '@material-ui/icons/Train'
import MetroIcon from '@material-ui/icons/Subway'
import BusIcon from '@material-ui/icons/DirectionsBus'
import TramIcon from '@material-ui/icons/Tram'
import BikeIcon from '@material-ui/icons/DirectionsBike'
import PhoneIcon from '@material-ui/icons/PhonelinkRing'
import GridIcon from '@material-ui/icons/GridOn'
import GridOffIcon from '@material-ui/icons/GridOff'

export const BUS = {
    type: 'Bus',
    color: 'blue',
    icon: <BusIcon />
}

export const TRAIN = {
    type: 'Train',
    color: 'red',
    icon: <TrainIcon />
}

export const TRAM = {
    type: 'Tram',
    color: 'yellow',
    icon: <TramIcon />
}

export const BIKE = {
    type: 'Bike',
    color: 'green',
    icon: <BikeIcon />
}

export const METRO = {
    type: 'Metro',
    color: 'brown',
    icon: <MetroIcon />
}

export const MOBILE = {
    type: 'Mobile Activity',
    color: 'pink',
    icon: <PhoneIcon />
}

export const GRID_ON = {
    type: 'Grid Available',
    color: 'black',
    icon: <GridIcon />
}

export const GRID_OFF = {
    type: 'Grid Unavailable',
    color: 'gray',
    icon: <GridOffIcon />
}