import React from 'react'
import mapTypes from '../../../utils/MapLayerData'
import '../../../styles/MenuItems.css'

const Layers = () => (
    <div className='menu-content'>
        <h1>Available Map Layers</h1>
        <p>You can alter them on the Layer Control at the top-right of the map.</p>
        {mapTypes.map((map, key) => (
            <div key={key} className='map-selection' style={{backgroundImage: `url(${map.img})`}}><span>{map.name}</span></div>
        ))}
    </div>
)

export default Layers