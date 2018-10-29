import mapStandard from '../img/geodata/map-standard.png'
import mapBlackWhite from '../img/geodata/map-blackwhite.png'
import mapTopography from '../img/geodata/map-topo.png'

const mapTypes = [
    {
        name: 'Black & White Map',
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
        url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
        img: mapBlackWhite,
    },
    {
        name: 'Topography Map',
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        img: mapTopography
    },
    {
        name: 'Roads Map',
        attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        url: 'https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
        img: mapStandard
    },
    {
        name: 'Grayscale Map',
        attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        url: 'https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}',
        img: mapStandard
    },
    {
        name: 'Satellite Imagery',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        img: mapStandard
    },
    {
        name: 'Standard Map',
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        img: mapStandard,
    },
]

export default mapTypes