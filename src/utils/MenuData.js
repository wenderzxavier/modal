import React from 'react'
import Upload from '../components/geodata/menuItems/Upload'
import Layers from '../components/geodata/menuItems/Layers'
import Marker from '../components/geodata/menuItems/Marker'

const MenuData = [
    {
        name: 'Upload',
        id: 'upload',
        icon: <i className="fas fa-cloud-upload-alt fa-lg"></i>,
        data: <Upload />
    },
    {
        name: 'Layers',
        id: 'layers',
        icon: <i className="fas fa-layer-group fa-lg"></i>,
        data: <Layers />
    },
    {
        name: 'Marker',
        id: 'marker',
        icon: <i className="fas fa-map-marker-alt fa-lg"></i>,
        data: <Marker />
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