import React, { Component } from 'react'
import L from 'leaflet'
import $ from 'jquery'
import '../../styles/Map.css'

class DualMap extends Component {
    componentDidMount() {
        let mapbefore = L.map('map-before', {
            zoom: 1,
            attributionControl: false,
            zoomControl: false,
            touchZoom: false,
            inertia: false,
            center: [1, 1]
        });

        let mapafter = L.map('map-after', {
            zoom: 1,
            attributionControl: false,
            zoomControl: false,
            touchZoom: false,
            inertia: false,
            center: [1, 1]
        });

        var osm_url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var attribution = '© OpenStreetMap';

        L.tileLayer(osm_url).addTo(mapbefore);
        L.tileLayer(osm_url, { id: 'MapID', attribution: attribution }).addTo(mapafter);

        L.control.zoom({ position: 'topright' }).addTo(mapafter);
        L.control.attribution({ position: 'bottomright' }).addTo(mapafter);

        L.circle([0, 0], 2000000, {
            color: 'red',
            fillColor: 'red',
            fillOpacity: .5
        }).addTo(mapbefore)

        L.circle([0, 0], 2000000, {
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: .5
        }).addTo(mapafter)

        //        before_overlays = new L.layerGroup().addTo(before);
        //        after_overlays = new L.layerGroup().addTo(after);

//        mapbefore.sync(mapafter);
//        mapafter.sync(mapbefore);

//        $('#map-container').beforeAfter(mapbefore, mapafter);
    }

    render() {
        return (
            <div id='map-container'>
                <div id='map-before' className='dualMap'></div>
                <div id='map-after' className='dualMap'></div>
            </div>
        )
    }
}


export default DualMap