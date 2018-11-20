import {
  CHANGE_COLOR,
  CHANGE_MARKER,
  CHANGE_DATA,
  CHANGE_DATES,
  CHANGE_VARIATION,
  CHANGE_MAX_HEATMAP,
  CHANGE_GRADIENT,
  CHANGE_SLIDER,
  UPDATE_SLIDER,
  CHANGE_MARKER_OVERVIEW
} from "../actions/Constants";

const initialMapState = {
  color: { 0: "rgb(0,0,0)", 1: "rgb(0,0,0)", 2: "rgb(0,0,0)", 3: "rgb(0,0,0)" },
  marker: { 0: "marker", 1: "marker", 2: "marker", 3: "marker" },
  data: [
    {
      coordinates: [-19.90503, -43.913277],
      timestamp: 1514930400,
      load: 2,
      group: 0
    },
    { coordinates: [-2, -2], timestamp: 1514930400, load: 7, group: 3 },
    { coordinates: [-1, -1], timestamp: 1514930400, load: 2, group: 0 },
    { coordinates: [1, 1], timestamp: 1514930400, load: 2, group: 1 },
    { coordinates: [2, 2], timestamp: 1514930400, load: 2, group: 2 }
  ],
  range: { start: 0, end: 0 },
  variation: {
    variationType: "static",
    range: {
      start: 0,
      end: 0
    }
  },
  heatmap: {
    name: "default",
    gradient: { "0.4": "blue", "0.8": "orange", "1.0": "red" },
    maxHeatmap: 3.0
  },
  slider: {
    max: 0,
    marks: {},
    selected: 0,
    data: []
  },
  markerName : '',
  markerData: []
};

const reducer = (state = initialMapState, action) => {
  const {
    color,
    marker,
    data,
    start,
    end,
    variationType,
    maxHeatmap,
    name,
    gradient,
    max,
    marks,
    selected,
    markerName,
    markerData
  } = action;
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: {
          ...color
        }
      };
    case CHANGE_MARKER:
      return {
        ...state,
        marker: {
          ...marker
        }
      };
    case CHANGE_DATA:
      return {
        ...state,
        data
      };
    case CHANGE_DATES:
      return {
        ...state,
        range: {
          start,
          end
        }
      };
    case CHANGE_VARIATION:
      return {
        ...state,
        variation: {
          variationType,
          range: {
            start,
            end
          }
        }
      };
    case CHANGE_MAX_HEATMAP:
      return {
        ...state,
        heatmap: {
          maxHeatmap
        }
      };
    case CHANGE_GRADIENT:
      return {
        ...state,
        heatmap: {
          name,
          gradient
        }
      };
    case CHANGE_SLIDER:
      return {
        ...state,
        slider: {
          max,
          marks,
          selected,
          data
        }
      };
    case UPDATE_SLIDER:
      return {
        ...state,
        data,
        slider: {
          selected
        }
      };
    case CHANGE_MARKER_OVERVIEW:
      return{
        ...state,
        markerName,
        markerData
      }
    default:
      return state;
  }
};

export default reducer;
