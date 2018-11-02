import React from 'react'
import MarkerData from '../../../utils/MarkerData'
import '../../../styles/MenuItems.css'

const Marker = () => (
    <div className='menu-content menu-wrap'>
        {MarkerData.map((marker, key) => (
            <div key={key}><img src={marker.icon} alt={`${marker.name} icon`}></img></div>
        ))}
    </div>
)

export default Marker