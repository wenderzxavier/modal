import React, { Component } from 'react'
import { Map } from 'react-leaflet'
// import MarkerColor from '../../utils/MarkerColors'
import MapLayer from './MapLayer'
import '../../styles/geodata.css'

class MapComponent extends Component {
    render() {
        const position = [-19.905030, -43.913277]
        const map = (
            <Map center={position} zoom={18}>
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