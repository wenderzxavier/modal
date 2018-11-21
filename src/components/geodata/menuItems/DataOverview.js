import React, { Component } from 'react'
// import $ from 'jquery'
import Plot from 'react-plotly.js'
import { connect } from 'react-redux'
import '../../../styles/MenuItems.css'

class DataOverview extends Component {
    state = {
        data: [],
        markerData: []
    }

    retrieveMarkerData = () => {
        const { markerData } = this.props
        let x = []
        let y = []
        markerData.map((point) => {
            const date = new Date(point.timestamp * 1000);
            const formattedDate = `${date.getMonth() +
                1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            x.push(formattedDate)
            y.push(point.load)
            return ''
        })
        return [x,y]
    }

    overviewData = () => {
        const { data } = this.props
        let x = []
        let y = []
        data.map((point) => {
            x.push(point.name)
            y.push(point.load)
            return ''
        })
        return [x,y]
    }


    render() {
        const { markerName } = this.props
        if (markerName) {
            var markerOverview = this.retrieveMarkerData()
        }
        console.log(markerOverview)
        const dataOverview = this.overviewData()
        return (
            <div>
                <Plot
                    data={
                        [{
                            type: 'bar',
                            x: dataOverview[0],
                            y: dataOverview[1]
                        }]
                    }
                    layout={{ title: 'Map Data Overview' }}
                />
                {markerName ?
                    <Plot 
                    data={
                        [{
                            type: 'bar',
                            x: markerOverview[0],
                            y: markerOverview[1]
                        }]
                    }
                    layout={{ title: `Marker ${markerName}` }}                    
                    />
                    :
                    ''}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
    markerName: state.markerName,
    markerData: state.markerData
})

export default connect(mapStateToProps)(DataOverview)