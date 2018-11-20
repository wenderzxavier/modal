import { CHANGE_MARKER, CHANGE_COLOR, CHANGE_DATA, CHANGE_DATES, CHANGE_VARIATION, CHANGE_GRADIENT, CHANGE_MAX_HEATMAP, CHANGE_SLIDER, UPDATE_SLIDER, CHANGE_MARKER_OVERVIEW } from './Constants'

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

export const changeGradient = ( name, gradient ) => {
    return{
        type: CHANGE_GRADIENT,
        name,
        gradient
    }
}

export const changeMaxHeatmap = (maxHeatmap) => {
    return {
        type: CHANGE_MAX_HEATMAP,
        maxHeatmap
    }
}

export const changeSlider = (data, max, marks, selected=0) => {
    return{
        type: CHANGE_SLIDER,
        max,
        marks,
        selected,
        data
    }
}

export const updateSlider = (data, selected) => {
    return{
        type: UPDATE_SLIDER,
        data,
        selected
    }
}

export const changeMarkerOverview = (markerName, markerData) => {
    return{
        type: CHANGE_MARKER_OVERVIEW,
        markerName,
        markerData
    }
}