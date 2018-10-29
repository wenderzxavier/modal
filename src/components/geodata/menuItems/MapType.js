import React from 'react'
import mapTypes from '../../../utils/MapLayerData'
import '../../../styles/MenuItems.css'

const MapType = () => (
    <div className='menu-content'>
        {mapTypes.map((map, key) => (
            <div key={key} className='map-selection' style={{backgroundImage: `url(${map.img})`}}><span>{map.name}</span></div>
        ))}
    </div>
)

export default MapType