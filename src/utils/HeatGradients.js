import blackAcqua from '../img/geodata/heatmap-blackAcqua.png'
import defaultHeatmap from '../img/geodata/heatmap-default.png'
import blueRed from '../img/geodata/heatmap-blueRed.png'
import deepSea from '../img/geodata/heatmap-deepSea.png'
import incandescent from '../img/geodata/heatmap-incandescent.png'
import heated from '../img/geodata/heatmap-heated.png'
import sunrise from '../img/geodata/heatmap-sunrise.png'
import stepped from '../img/geodata/heatmap-stepped.png'
import visible from '../img/geodata/heatmap-visible.png'

const heatmapGradients = [
    {
        name: 'Default',
        id: 'default',
        img: defaultHeatmap,
        gradient: { '0.4': 'blue', '0.8': 'orange', '1.0': 'red' }
    },
    {
        name: 'Black-Acqua-White',
        id: 'blackacqua',
        img: blackAcqua,
        gradient: {
            '0': 'black',
            '0.5': 'rgb(0, 255, 255)',
            '1': 'white'
          }
    },
    {
        name: 'Blue-Red',
        id: 'bluered',
        img: blueRed,
        gradient: {
            '0.0': 'blue',
            '1': 'red'
          }
    },
    {
        name: 'Deep Sea',
        id: 'deepSea',
        img: deepSea,
        gradient: {
            '0.0': 'rgb(0, 0, 0)',
            '0.6': 'rgb(24, 53, 103)',
            '0.75': 'rgb(46, 100, 158)',
            '0.9': 'rgb(23, 173, 203)',
            '1.0': 'rgb(0, 250, 250)'
          }
    },
    {
        name: 'Incandescent',
        id: 'incandescent',
        img: incandescent,
        gradient: {
            '0': 'black',
            '0.33': 'rgb(125, 0, 0)',
            '0.66': 'yellow',
            '1': 'white'
          }
    },
    {
        name: 'Heated Metal',
        id: 'heated',
        img: heated,
        gradient: 	{
            '0': 'black',
            '0.4': 'purple',
            '0.6': 'red',
            '0.8': 'yellow',
            '1': 'white'
          }
    },
    {
        name: 'Sunrise',
        id: 'sunrise',
        img: sunrise,
        gradient: {
            '0': 'red',
            '0.66': 'yellow',
            '1': 'white'
          }
    },
    {
        name: 'Stepped Colors',
        id: 'stepped',
        img: stepped,
        gradient: {
            '0': 'rgb(0, 255, 255)', '0.25': 'rgb(0, 255, 255)',
            '0.26': 'green',
            '0.5': 'green',
            '0.51': 'yellow',
            '0.75': 'yellow',
            '0.76': 'red',
            '1': 'red'
          }
    },
    {
        name: 'Visible Spectrum',
        id: 'visible',
        img: visible,
        gradient: 	{
            '0.00': 'rgb(255,0,255)',
            '0.25': 'rgb(0,0,255)',
            '0.50': 'rgb(0,255,0)',
            '0.75': 'rgb(255,255,0)',
            '1.00': 'rgb(255,0,0)'
          }
    }
    
]

export default heatmapGradients