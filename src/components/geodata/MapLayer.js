import React, { Component } from 'react'
// import L, { svg } from 'leaflet'
import { connect } from 'react-redux'
import { Marker, LayersControl, LayerGroup, TileLayer } from 'react-leaflet'
import mapTypes from '../../utils/MapLayerData'
// import MarkerIcon from '../../img/geodata/MarkerIcon'
// import icontest from '../../img/geodata/antennaIcon.svg'

class MapLayer extends Component {
    render() {
        const { BaseLayer, Overlay } = LayersControl
        const { data } = this.props
        //const svgMarker = MarkerData.filter(marker => marker.id === markerType)[0].icon
        // var markerIcon = L.icon({
        //     iconUrl: {...MarkerIcon},
        
        //     iconSize:     [38, 95], // size of the icon
        //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        // });
        
        return (
            <LayersControl position="topright">
                {mapTypes.map((data, key) => (
                    <BaseLayer checked={data.checked} key={key} name={data.name}>
                        <TileLayer
                            attribution={data.attribution}
                            url={data.url}
                        />
                    </BaseLayer>
                ))}
                {[1, 2, 3, 4].map((value) => (
                    <Overlay key={value} name={`Group #${value}`}>
                        <LayerGroup>
                            {data
                                .filter(register => register.group === value)
                                .map((register, key) => (
                                    <Marker key={key} position={register.coordinates}>
                                    </Marker>
                                ))
                            }
                        </LayerGroup>
                    </Overlay>
                    // <Overlay key={value} name={`Group #${value}`}>
                    //     {data
                    //         .filter(register => register.group === value)
                    //         .map((register, key) => (
                    //             <Marker key={key} position={register.coordinates}>
                    //                 <Popup>
                    //         <p>{`${register.name}\n${register.coordinates}${register.load}`}</p>
                    //                 </Popup>
                    //             </Marker>
                    //         ))
                    //     }
                    // </Overlay>
                ))}
            </LayersControl>
        )
    }
}

const mapStateToProps = (state) => ({
    markerType: state.marker,
    markerColor: state.color,
    data: state.data,
})

export default connect(mapStateToProps)(MapLayer)