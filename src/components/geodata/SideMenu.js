import React, { Component } from 'react'
import $ from 'jquery'
import '../../styles/geodata.css'

class SideMenu extends Component {
    openMenu() {

    }

    componentDidMount() {
        $('.menu-list li').click((target) => {

        })
    }

    render() {
        console.log($)
        return (
            <div id='side-menu'>
                <ul className='menu-list'>
                    <li><i className="fas fa-cloud-upload-alt fa-lg"></i>Upload</li>
                    <li><i className="fas fa-map-marked-alt fa-lg"></i>Map Type</li>
                    <li><i className="fas fa-map-marker-alt fa-lg"></i>Marker</li>
                    <li><i className="far fa-clock fa-lg"></i>Time Variation</li>
                    <li><i className="fas fa-database"></i>Data Overview</li>
                    <li><i className="fas fa-plus"></i>Add to Map</li>
                </ul>
            </div>
        )
    }
}

export default SideMenu