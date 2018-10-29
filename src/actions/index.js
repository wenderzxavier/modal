import { CHANGE_MAP, CHANGE_MARKER, CHANGE_INTERVAL } from './Constants'

export const changeMap = (map) => {
    return{
        type : CHANGE_MAP,
        map
    }
}

export const changeMarker = (marker) => {
    return {
        type: CHANGE_MARKER,
        marker
    }
}

export const changeVariation = (interval) => {
    return{
        type: CHANGE_INTERVAL,
        interval
    }
}