import React from 'react'
import MarkerData from '../../../utils/MarkerData'
import '../../../styles/MenuItems.css'

const Marker = () => (
    <div className='menu-content menu-wrap'>
        {MarkerData.map((marker, key) => (
            <div><label key={key} className='marker-type'>{marker.icon}<p>{marker.name}</p></label></div>
        ))}
    </div>
)

export default Marker