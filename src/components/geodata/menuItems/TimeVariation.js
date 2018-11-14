import React, { Component } from "react";
import { changeData, changeVariation } from "../../../actions";
import { connect } from "react-redux";
import $ from "jquery";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { staticMap, yearVariation } from "../func";
//import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-daterangepicker/daterangepicker.css";
import "../../../styles/MenuItems.css";

class TimeVariation extends Component {
    constructor(props) {
        super(props);
        this.editInterval = this.editInterval.bind(this);
        this.editVariation = this.editVariation.bind(this);
    }

    state = {
        data: [],
        interval: "static",
        start: 0,
        end: 0
    };

    updateMap() {
        const { start, end, interval } = this.state;
        switch (interval) {
            case 'static':
            staticMap(start, end)
                staticMap(start, end)
                    .then(data => this.props.updateData(data))
                    .catch(err => console.warn(err))
                break
            case 'year':
                yearVariation(start, end)
        }
        this.props.updateVariation(interval, start, end)
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
            () => this.props.updateVariation("static", resetStart, resetEnd)
        );
    }

    componentWillMount() {
        const { data, interval, start, end } = this.props;
        this.setState({
            data,
            interval,
            start,
            end
        });
    }

    componentDidMount() {
        $(`#${this.props.interval}`)
            .parent()
            .addClass("variation-select");
    }

    render() {
        const { start, end, resetStart, resetEnd } = this.props;
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
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
        dispatch(changeVariation(type, start, end))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeVariation);
