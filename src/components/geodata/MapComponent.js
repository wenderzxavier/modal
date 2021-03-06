import React, { Component } from 'react'
import { Map } from 'react-leaflet'
import MapLayer from './MapLayer'
import '../../styles/Map.css'

class MapComponent extends Component {
    render() {
        const position = [0, 0]
        var map = (
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