import React from 'react'
import '../../../styles/MenuItems.css'

const TimeVariation = () => (
    <div className='menu-content menu-wrap'>
        {markerColor.map((color, key) => (
            <div className='marker-color' key={key} style={{background: color.code}}></div>
        ))}
    </div>
)

export default Marker