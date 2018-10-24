import React from 'react'
import Navigation from '../components/Navigation'
import SideMenu from '../components/geodata/SideMenu'
import MenuDetails from '../components/geodata/MenuDetails'
import MapComponent from '../components/geodata/MapComponent'
import '../styles/geodata.css'


const GeoData = () => (
    <div id='geodata'>
        <header>
            <Navigation />
        </header>
        <main id='main'>
            <SideMenu />
            <MenuDetails />
            <MapComponent />
        </main>
    </div>
)
// Fernanda NIT 3319 4298
export default GeoData