import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'
import L from 'leaflet'
import { connect } from 'react-redux'
import { Marker, LayersControl, LayerGroup, TileLayer } from 'react-leaflet'
import mapTypes from '../../utils/MapLayerData'
import AntennaIcon from '../../img/geodata/AntennaIcon'
import MarkerIcon from '../../img/geodata/MarkerIcon';
import '../../styles/Map.css'
import BusIcon from '../../img/geodata/BusIcon';
import CarIcon from '../../img/geodata/CarIcon';
import PersonIcon from '../../img/geodata/PersonIcon';
import PinIcon from '../../img/geodata/PinIcon';

class MapLayer extends Component {
    getMarkerType(type, group) {
        let fillColor = this.getMarkerColor(group)
        switch (type) {
            case 'marker':
                return <MarkerIcon fill={fillColor} />

            case 'antenna':
                return <AntennaIcon fill={fillColor} />

            case 'bus':
                return <BusIcon fill={fillColor} />

            case 'car':
                return <CarIcon fill={fillColor} />

            case 'person':
                return <PersonIcon fill={fillColor} />

            case 'pin':
                return <PinIcon fill={fillColor} />

            default:
                return <MarkerIcon fill={fillColor} />
        }
    }

    getMarkerColor(group) {
        return this.props.markerColor[group]
    }

    updateIcon() {
        let result = []
        const { markerType } = this.props
        for (let i = 0; i < 4; i++) {
            result.push(
                L.divIcon({
                    html: ReactDOMServer.renderToString(this.getMarkerType(markerType[i], i)),
                    iconSize: [33, 33],
                    className: 'markerStyle'
                }))
        }
        return result
    }

    render() {
        const { BaseLayer, Overlay } = LayersControl
        const { data } = this.props
        let icons = this.updateIcon()
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
                {[0, 1, 2, 3].map((value) => (
                    <Overlay key={value} name={`Group #${value}`} checked>
                        <LayerGroup>
                                {data
                                    .filter(register => register.group === value)
                                    .map((register, key) => (
                                        <Marker key={key} position={register.coordinates} icon={icons[value]}>
                                        </Marker>
                                    ))
                                }
                        </LayerGroup>
                    </Overlay>
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