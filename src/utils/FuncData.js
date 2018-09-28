import * as data from './Constants'
import ptsEvaluation from '../img/funcs/ptsEvaluation.png'
import networkLoad from '../img/funcs/networkLoad.png'

const Analyses = [
    {
        name: 'PTS Evaluation using Complex Network Metrics',
        cover: ptsEvaluation,
        data: [
            data.BUS, data.METRO, data.TRAM
        ],
        description: 'Evaluate the displacement of public transportation city using transportation data and complet network metrics.'
    },
    {
        name: 'Mobile Traffic Signature',
        cover: networkLoad,
        data: [
            data.MOBILE, data.GRID_ON, data.GRID_OFF
        ],
        description: 'Aggregate mobile traffic volume of city areas as traffic signatures used to compare different regions of a city.'
    },
]

export default Analyses