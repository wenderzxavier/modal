import { CHANGE_MARKER, CHANGE_INTERVAL, CHANGE_COLOR } from './Constants'

export const changeMarker = (marker) => {
    return {
        type: CHANGE_MARKER,
        marker
    }
}

export const changeMarkerColor = (color) => {
    return {
        type: CHANGE_COLOR,
        color
    }
}

export const changeVariation = (interval) => {
    return{
        type: CHANGE_INTERVAL,
        interval
    }
}