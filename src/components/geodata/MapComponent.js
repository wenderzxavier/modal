import React, { Component } from 'react'
import { Map } from 'react-leaflet'
import MapLayer from './MapLayer'
import '../../styles/geodata.css'

class MapComponent extends Component {
    render() {
        const position = [51.505, -0.09]
        const map = (
            <Map center={position} zoom={13}>
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