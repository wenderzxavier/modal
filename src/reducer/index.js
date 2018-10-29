import { CHANGE_MAP, CHANGE_MARKER, CHANGE_INTERVAL } from '../actions/Constants'

const initialMapState = {
    map: 'standard',
    marker: 'blue',
    interval: 'none'
}

const reducer = (state = initialMapState, action) => {
    const { map, marker, interval } = action
    switch (action.type) {
        case CHANGE_MAP:
            return {
                ...state,
                map: map
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