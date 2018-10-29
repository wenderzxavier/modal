import React from 'react'
import markerColor from '../../../utils/MarkerColors'
import '../../../styles/MenuItems.css'

const Marker = () => (
    <div className='menu-content menu-wrap'>
        {markerColor.map((color, key) => (
            <div className='marker-color' key={key} style={{background: color.code}}></div>
        ))}
    </div>
)

export default Marker