import * as data from './Constants'
import chicago from '../img/city/chicago.png'
import taichung from '../img/city/taichung.png'
import dubai from '../img/city/dubai.png'

const CityData = [
    {
        name: 'Chicago',
        cover: chicago,
        data: [
            data.BUS, data.METRO, data.TRAM, data.BIKE
        ],
        description: 'Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S, with a population of 2.705 million (2016) and area of 606.1km²'
    },
    {
        name: 'Dubai',
        cover: dubai,
        data: [
            data.BUS, data.TRAIN, 
        ],
        description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. It has a population of 3.118 million (2016) and area of 4,114km²'
    },
    {
        name: 'Taichung',
        cover: taichung,
        data: [
            data.BUS, data.METRO
        ],
        description: 'Taichung is an industrial city on the western side of central Taiwan. Has a population of 2.797 million (2018), area of 2,215km² and urban area of 492km²'
    }
]

export default CityData