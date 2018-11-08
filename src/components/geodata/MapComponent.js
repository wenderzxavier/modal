import React, { Component } from 'react'
import { Map } from 'react-leaflet'
// import MarkerColor from '../../utils/MarkerColors'
import MapLayer from './MapLayer'
import '../../styles/geodata.css'

class MapComponent extends Component {
    render() {
        const position = [0,0]
        const map = (
            <Map center={position} zoom={3}>
                <MapLayer />
            </Map>
        )
        return (
            <div id='map'>
                {map}
            </div>
        )
    }
}

export default MapComponent