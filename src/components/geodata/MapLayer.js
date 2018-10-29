import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';
import mapTypes from '../../utils/MapLayerData'

const { BaseLayer } = LayersControl

const MapLayer = () => (
    <LayersControl position="topright">
        {mapTypes.map((data, key) => (
            <BaseLayer checked={data.checked} key={key} name={data.name}>
                <TileLayer
                    attribution={data.attribution}
                    url={data.url}
                />
            </BaseLayer>
        ))}
    </LayersControl>
)

export default MapLayer