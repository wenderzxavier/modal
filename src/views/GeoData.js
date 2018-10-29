import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import SideMenu from '../components/geodata/SideMenu'
import MenuDetails from '../components/geodata/MenuDetails'
import MapComponent from '../components/geodata/MapComponent'
import '../styles/geodata.css'


class GeoData extends Component {
    state = {
        selectedMenu: ''
    }

    updateSelectMenu(menu = ''){
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        console.log(`Current Menu = ${this.state.selectedMenu}`)
        return (
            <div id='geodata'>
                <header>
                    <Navigation />
                </header>
                <main id='main'>
                    <SideMenu updateMenu={this.updateSelectMenu.bind(this)}/>
                    <MenuDetails selectedMenu={this.state.selectedMenu}/>
                    <MapComponent />
                </main>
            </div>
        )
    }
}
// Fernanda NIT 3319 4298
export default GeoData