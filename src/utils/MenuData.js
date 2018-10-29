import React from 'react'
import MapType from '../components/geodata/menuItems/MapType'

const MenuData = [
    {
        name: 'Upload',
        id: 'upload',
        icon: <i className="fas fa-cloud-upload-alt fa-lg"></i>,
        data: <div>Upload</div>
    },
    {
        name: 'Map Type',
        id: 'mapType',
        icon: <i className="fas fa-map-marked-alt fa-lg"></i>,
        data: <MapType />
    },
    {
        name: 'Marker',
        id: 'marker',
        icon: <i className="fas fa-map-marker-alt fa-lg"></i>,
        data: <div>Marker</div>
    },
    {
        name: 'Time Variation',
        id: 'timeVariation',
        icon: <i className="far fa-clock fa-lg"></i>,
        data: <div>Time</div>
    },
    {
        name: 'Data Overview',
        id: 'dataOverview',
        icon: <i className="fas fa-database"></i>,
        data: <div>Data Overview</div>
    },
    {
        name: 'Add to Map',
        id: 'addMap',
        icon: <i className="fas fa-plus"></i>,
        data: ''
    }
]

export default MenuData