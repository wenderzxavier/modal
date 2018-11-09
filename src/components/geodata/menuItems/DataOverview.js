import React, { Component } from 'react'
import $ from 'jquery'
import Plot from 'react-plotly.js'
import '../../../styles/MenuItems.css'

class DataOverview extends Component {

    gaussianRand() {
        var rand = 0;
        for (var i = 0; i < 6; i += 1) {
            rand += Math.random();
        }
        return (rand / 6) - 0.5;
    }



    render() {
        const currentWidth = $('#menu-selected').width()
        var x1 = [];
        var x2 = [];
        var y1 = [];
        var y2 = [];
        for (var i = 1; i < 500; i++) {
            let k = Math.random();
            x1.push(k * 5);
            x2.push(k * 10);
            y1.push(k);
            y2.push(k * 2);
        }
        var trace1 = {
            x: x1,
            y: y1,
            name: 'control',
            autobinx: false,
            histnorm: "count",
            marker: {
                color: "rgba(255, 100, 102, 0.7)",
                line: {
                    color: "rgba(255, 100, 102, 1)",
                    width: 1
                }
            },
            opacity: 0.5,
            type: "histogram",
            xbins: {
                end: 2.8,
                size: 0.06,
                start: .5
            }
        };
        var trace2 = {
            x: x2,
            y: y2,
            autobinx: false,
            marker: {
                color: "rgba(100, 200, 102, 0.7)",
                line: {
                    color: "rgba(100, 200, 102, 1)",
                    width: 1
                }
            },
            name: "experimental",
            opacity: 0.75,
            type: "histogram",
            xbins: {
                end: 4,
                size: 0.06,
                start: -3.2
            }
        };

        var X = [],
            Y = [],
            n = 1000000,
            i;

        for (i = 0; i < n; i += 1) {
            X.push(this.gaussianRand());
            Y.push(this.gaussianRand());
        }
        //====================================ANALYSES 3
        var start_value = 0,
            stop_value = 1,
            point_num = 5000,
            trace_num = 10;
        var curr_value = start_value;
        var step = (stop_value - start_value) / (point_num - 1);

        var dataFinal = [];
        for (var j = 0; j < trace_num; j++) {
            var X = [],
                Y = [];
            for (var i = 0; i < point_num; i++) {
                X.push(curr_value + (step * i));
                Y.push((this.gaussianRand() * 8) + (j * 5));
            }
            dataFinal.push({
                type: "scattergl",
                mode: "line",
                x: X,
                y: Y
            })
        }

        return (
            <div id='dataOverview-content' className='menu-content'>
                <Plot className='plot-data'
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                    ]}
                    layout={{ title: 'A Fancy Plot' }}
                />
                <Plot className='plot-data'
                    data={[trace1, trace2]}
                    layout={{
                        bargap: 0.05,
                        bargroupgap: 0.2,
                        barmode: "overlay",
                        title: "Sampled Results",
                        xaxis: { title: "Value" },
                        yaxis: { title: "Count" }
                    }}
                />

                <Plot className='plot=data'
                    data={[{
                        type: "scattergl",
                        mode: "markers",
                        marker: {
                            color: 'rgb(152, 0, 0)',
                            line: {
                                width: 1,
                                color: 'rgb(0,0,0)'
                            }
                        },
                        x: X,
                        y: Y
                    }]}
                />

                <Plot className='plot-data' 
                    data = {dataFinal}
                />
            </div>
        )
    }
}


export default DataOverview