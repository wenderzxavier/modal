import { CHANGE_MARKER, CHANGE_COLOR, CHANGE_DATA, CHANGE_DATES, CHANGE_VARIATION } from './Constants'

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

export const changeData = (data) => {
    return{
        type: CHANGE_DATA,
        data
    }
}

export const changeDates = (start, end) => {
    return{
        type: CHANGE_DATES,
        start,
        end
    }
}

export const changeVariation = ( variationType, start, end ) => {
    return{
        type: CHANGE_VARIATION,
        variationType,
        start,
        end
    }
}
