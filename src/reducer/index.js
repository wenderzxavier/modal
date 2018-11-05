import { CHANGE_COLOR, CHANGE_MARKER, CHANGE_INTERVAL } from '../actions/Constants'

const initialMapState = {
    color: 'rgb(255,0,0)',
    marker: 'blue',
    interval: 'none'
}

const reducer = (state = initialMapState, action) => {
    const { color, marker, interval } = action
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: color
            }
        case CHANGE_MARKER:
            return {
                ...state,
                marker: marker
            }
        case CHANGE_INTERVAL:
            return {
                ...state,
                interval: interval
            }
        default:
            return state
    }
}

export default reducer