import React from 'react'
import Upload from '../components/geodata/menuItems/Upload'
import Layers from '../components/geodata/menuItems/Layers'
import Marker from '../components/geodata/menuItems/Marker'
import DataOverview from '../components/geodata/menuItems/DataOverview'
import TimeVariation from '../components/geodata/menuItems/TimeVariation'
import AddMap from '../components/geodata/menuItems/AddMap'
import BeforeAfter from '../components/geodata/menuItems/BeforeAfter'

const MenuData = [
    {
        name: 'Upload',
        id: 'upload',
        icon: <i className="fas fa-cloud-upload-alt fa-lg"></i>,
        data: <Upload />
    },
    {
        name: 'Before-After',
        id: 'beforeAfter',
        icon: <i className="fas fa-map-marked-alt fa-lg"></i>,
        data: <BeforeAfter />
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
        data: <TimeVariation />
    },
    {
        name: 'Data Overview',
        id: 'dataOverview',
        icon: <i className="fas fa-database fa-lg"></i>,
        data: <DataOverview />
    },
    {
        name: 'Add to Map',
        id: 'addMap',
        icon: <i className="fas fa-plus fa-lg"></i>,
        data: <AddMap />
    }
]

export default MenuData