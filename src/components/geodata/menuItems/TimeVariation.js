import React, { Component } from "react";
import { changeData, changeVariation, changeSlider, updateSlider } from "../../../actions";
import { connect } from "react-redux";
import $ from "jquery";
import Slider from 'rc-slider';
import DateRangePicker from "react-bootstrap-daterangepicker";
import { staticMap, yearVariation, monthVariation, dayVariation, hourVariation } from "../func";
import "bootstrap-daterangepicker/daterangepicker.css";
import 'rc-slider/assets/index.css';
import "../../../styles/MenuItems.css";

class TimeVariation extends Component {
    constructor(props) {
        super(props);
        this.editInterval = this.editInterval.bind(this);
        this.editVariation = this.editVariation.bind(this);
        this.updateSlider = this.updateSlider.bind(this)
    }

    state = {
        data: [],
        interval: 'static',
        start: 0,
        end: 0,
        slider: {
            max: 0,
            marks: {},
            selected: 0
        }
    };

    updateSlider(value){
        console.log(value)
        console.log(this.state.data)
        let key = Object.keys(this.state.data)[value]
        this.props.updateSlider(this.state.data[key], value)
    }

    getMarks = () => {
        const { data } = this.state
        let keys = Object.keys(data)
        var marks = {}
        var max = 0
        if (keys.length > 0) {
            max = keys.length-1
            for (let i = 0; i < 5; i++) {
                let pos = Math.round((i / 4) * (max))
                marks[pos] = keys[pos]
            }
        }
        this.setState({
            slider: {
                max,
                marks,
                selected: 0
            }
        }, () => this.props.changeSlider(data, max, marks))
    }

    updateMap() {
        const { start, end, interval } = this.state;
        switch (interval) {
            case 'static':
                staticMap(start, end)
                    .then(data => {
                        this.setState({
                            data,
                        }, () => {
                            this.props.updateData(data)
                        })
                    })
                    .catch(err => console.warn(err))
                break
            case 'year':
                yearVariation(start, end)
                    .then(data => {
                        this.setState({
                            data
                        }, () => {
                            this.getMarks()
                            this.updateSlider(0)
                        })
                    })
                    .catch(err => console.warn(err))
                break
            case 'month':
                monthVariation(start, end)
                    .then(data => {
                        this.setState({
                            data
                        }, () => {
                            this.getMarks()
                            this.updateSlider(0)
                        })
                    })
                    .catch(err => console.warn(err))
                break
            case 'day':
                dayVariation(start, end)
                    .then(data => {
                        console.log(data)
                        this.setState({
                            data
                        }, () => {
                            this.getMarks()
                            this.updateSlider(0)
                        })
                    })
                    .catch(err => console.warn(err))
                break
            case 'hour':
                hourVariation(start, end)
                    .then(data => {
                        this.setState({
                            data
                        }, () => {
                            this.getMarks()
                            this.updateSlider(0)
                        })
                    })
                    .catch(err => console.warn(err))
                break

        }
        this.props.updateVariation(interval, start, end)
    }

    retrieveSliderData() {
        console.log('Retrieve')
    }

    editVariation(evt) {
        if (evt.target.id) {
            $('.check-variation').removeClass('variation-select')
            $(`#${evt.target.id}`).parent().addClass("variation-select");
            this.setState({
                interval: evt.target.id
            })
        }
    }

    editInterval(evt, picker) {
        let start = Math.round(new Date(picker.startDate._d).getTime() / 1000);
        let end = Math.round(new Date(picker.endDate._d).getTime() / 1000);
        this.setState({
            start,
            end
        });
    }

    resetData() {
        const { resetStart, resetEnd } = this.props;
        let data = staticMap(this.props.resetStart, this.props.resetEnd);
        this.setState(
            {
                data,
                interval: "static",
                start: resetStart,
                end: resetEnd
            },
            () => {
                this.props.updateVariation("static", resetStart, resetEnd)
                $('.check-variation').removeClass('variation-select')
                $(`#static`).parent().addClass("variation-select");
            }
        );
    }

    componentWillMount() {
        console.log('Will Mount')
        const { interval, start, end, slider } = this.props;
        this.setState({
            data: slider.data,
            interval,
            start,
            end,
            slider
        });
    }

    componentDidMount() {
        $(`#${this.props.interval}`)
            .parent()
            .addClass("variation-select");
    }

    render() {
        const { slider } = this.state
        const { start, end, resetStart, resetEnd, interval } = this.props;
        const startDate = new Date(start * 1000);
        const endDate = new Date(end * 1000);
        const lowerDate = new Date(resetStart * 1000);
        const higherDate = new Date(resetEnd * 1000);
        const lowerBoundDate = `${lowerDate.getMonth() +
            1}/${lowerDate.getDate()}/${lowerDate.getFullYear()}`;
        const higherBoundDate = `${higherDate.getMonth() +
            1}/${higherDate.getDate() + 1}/${higherDate.getFullYear()}`;
        const formatedStartDate = `${startDate.getMonth() +
            1}/${startDate.getDate()}/${startDate.getFullYear()}`;
        const formatedEndDate = `${endDate.getMonth() + 1}/${endDate.getDate() +
            1}/${endDate.getFullYear()}`;

        return (
            <div className="menu-content">
                <label
                    htmlFor="update-mapdata"
                    className="timeVar-btn"
                >
                    <input type="button" id="update-mapdata" onClick={() => this.updateMap()} />
                    Update Map Data
        </label>
                <label htmlFor="reset-data" className="reset-btn">
                    <i className="fas fa-undo" />
                    <input
                        id="reset-data"
                        type="button"
                        onClick={() => this.resetData()}
                    />
                    Reset Data
        </label>
                <p>Select Date-Range to Analyze:</p>
                <DateRangePicker
                    minDate={lowerBoundDate}
                    maxDate={higherBoundDate}
                    startDate={formatedStartDate}
                    endDate={formatedEndDate}
                    onApply={this.editInterval}
                >
                    <label className="date-picker">
                        <i className="far fa-calendar-alt calendar date-picker-icon" />
                    </label>
                </DateRangePicker>
                <p id="start-date" className="interval-display">
                    Current Start: {formatedStartDate}
                </p>
                <p id="end-date" className="interval-display">
                    Current End: {formatedEndDate}
                </p>
                <div>
                    <header>Intervals</header>
                    <div className="select-variation">
                        <label
                            htmlFor="static"
                            className="check-variation"
                            onClick={evt => this.editVariation(evt)}
                        >
                            <input id="static" type="checkbox" name="variation" /> Static
            </label>
                        <label
                            htmlFor="year"
                            className="check-variation"
                            onClick={evt => this.editVariation(evt)}
                        >
                            <input id="year" type="checkbox" name="variation" /> Year
            </label>
                        <label
                            htmlFor="month"
                            className="check-variation"
                            onClick={evt => this.editVariation(evt)}
                        >
                            <input id="month" type="checkbox" name="variation" /> Month
            </label>
                        <label
                            htmlFor="day"
                            className="check-variation"
                            onClick={evt => this.editVariation(evt)}
                        >
                            <input id="day" type="checkbox" name="variation" /> Day
            </label>
                        <label
                            htmlFor="hour"
                            className="check-variation"
                            onClick={evt => this.editVariation(evt)}
                        >
                            <input id="hour" type="checkbox" name="variation" /> Hour
            </label>
                    </div>
                </div>
                {interval === 'static' ? '' :
                    <div id='sliderVariation'>
                        <Slider vertical min={0} marks={slider.marks} onChange={this.updateSlider} defaultValue={slider.selected} max={slider.max} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    slider: state.slider,
    data: state.data,
    interval: state.variation.variationType,
    start: state.variation.range.start,
    end: state.variation.range.end,
    resetStart: state.range.start,
    resetEnd: state.range.end
});

const mapDispatchToProps = dispatch => ({
    updateData: data => dispatch(changeData(data)),
    updateVariation: (type, start, end) =>
        dispatch(changeVariation(type, start, end)),
    changeSlider: (data, max, marks) => dispatch(changeSlider(data, max, marks)),
    updateSlider: (data, selected) => dispatch(updateSlider(data, selected))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeVariation);
