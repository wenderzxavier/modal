import { CHANGE_COLOR, CHANGE_MARKER, CHANGE_DATA, CHANGE_DATES, CHANGE_VARIATION, CHANGE_MAX_HEATMAP, CHANGE_GRADIENT } from '../actions/Constants'

const initialMapState = {
    color: { 0: 'rgb(0,0,0)', 1: 'rgb(0,0,0)', 2: 'rgb(0,0,0)', 3: 'rgb(0,0,0)' },
    marker: { 0: 'marker', 1: 'marker', 2: 'marker', 3: 'marker' },
    data: [
        { coordinates: [-19.905030, -43.913277], timestamp: 1514930400, load: 2, group: 0 },
        { coordinates: [-2, -2], timestamp: 1514930400, load: 7, group: 3 },
        { coordinates: [-1, -1], timestamp: 1514930400, load: 2, group: 0 },
        { coordinates: [1, 1], timestamp: 1514930400, load: 2, group: 1 },
        { coordinates: [2, 2], timestamp: 1514930400, load: 2, group: 2 }
    ],
    range: { start: 0, end: 0 },
    variation: {
        variationType: 'static',
        range: {
            start: 0,
            end: 0
        }
    },
    heatmap: {
        name: 'default',
        gradient: { '0.4': 'blue', '0.8': 'orange', '1.0': 'red' },
        max: 3.0,
    }
}

const reducer = (state = initialMapState, action) => {
    const { color, marker, data, start, end, variationType, max, name, gradient } = action
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: {
                    ...color
                }
            }
        case CHANGE_MARKER:
            return {
                ...state,
                marker: {
                    ...marker
                }
            }
        case CHANGE_DATA:
            return {
                ...state,
                data
            }
        case CHANGE_DATES:
            return {
                ...state,
                range: {
                    start,
                    end
                }
            }
        case CHANGE_VARIATION:
            return{
                ...state,
                variation: {
                    variationType,
                    range: {
                        start,
                        end
                    }
                }
            }
        case CHANGE_MAX_HEATMAP:
        return {
            ...state,
            heatmap: {
                max
            }
        }
        case CHANGE_GRADIENT:
        return {
            ...state,
            heatmap: {
                name,
                gradient,
            }
        }
        default:
            return state
    }
}

export default reducer