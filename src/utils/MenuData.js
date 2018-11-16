import React from 'react'
import Upload from '../components/geodata/menuItems/Upload'
import Layers from '../components/geodata/menuItems/Layers'
import Marker from '../components/geodata/menuItems/Marker'
import DataOverview from '../components/geodata/menuItems/DataOverview'
import TimeVariation from '../components/geodata/menuItems/TimeVariation'
import AddMap from '../components/geodata/menuItems/AddMap'

const MenuData = [
    {
        name: 'Upload',
        id: 'upload',
        icon: <i className="fas fa-cloud-upload-alt fa-lg"></i>,
        data: <Upload />,
        class: 'menu-item data-upload'
    },
    {
        name: 'Layers',
        id: 'layers',
        icon: <i className="fas fa-layer-group fa-lg"></i>,
        data: <Layers />,
        class: 'menu-item data-analyses'
    },
    {
        name: 'Marker',
        id: 'marker',
        icon: <i className="fas fa-map-marker-alt fa-lg"></i>,
        data: <Marker />,
        class: 'menu-item data-analyses'
    },
    {
        name: 'Time Variation',
        id: 'timeVariation',
        icon: <i className="far fa-clock fa-lg"></i>,
        data: <TimeVariation />,
        class: 'menu-item data-analyses'
    },
    {
        name: 'Data Overview',
        id: 'dataOverview',
        icon: <i className="fas fa-database fa-lg"></i>,
        data: <DataOverview />,
        class: 'menu-item data-analyses'
    },
    {
        name: 'Add to Map',
        id: 'addMap',
        icon: <i className="fas fa-plus fa-lg"></i>,
        data: <AddMap />,
        class: 'menu-item data-analyses'
    }
]

export default MenuData