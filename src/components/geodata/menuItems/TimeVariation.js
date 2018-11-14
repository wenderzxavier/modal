import React, { Component } from 'react'
import { changeData } from '../../../actions';
import { connect } from 'react-redux'
import $ from 'jquery'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import { staticMap } from '../func/variations'
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import '../../../styles/MenuItems.css'

class TimeVariation extends Component {
    constructor(props) {
        super(props)
        this.editInterval = this.editInterval.bind(this)
        this.editVariation = this.editVariation.bind(this)
    }

    state = {
        data: [],
        interval: 'static',
        startDate: '',
        endDate: '',
        startDateUnix: 0,
        endDateUnix: 0
    }

    updateMap() {
        const { data, startDateUnix, endDateUnix } = this.state
        console.log(this.state.startDateUnix)
        console.log(this.state.endDateUnix)
        console.log(this.state.interval)
        console.log(this.state.startDate)
        console.log(this.state.endDate)
        staticMap(startDateUnix, endDateUnix)
    }

    updateStateInterval(startDate, endDate) {
        this.setState({
            startDate,
            endDate
        })
    }

    editVariation(evt) {
        $('.check-variation').removeClass('variation-select')
        $(evt.currentTarget).addClass('variation-select')
        this.setState({
            interval: evt.target.id
        })
    }

    editInterval(evt, picker) {
        let start = new Date(picker.startDate._d)
        let end = new Date(picker.endDate._d)
        let startDate = `${start.getMonth() + 1}/${start.getDate()}/${start.getFullYear()}`
        let endDate = `${end.getMonth() + 1}/${end.getDate()}/${end.getFullYear()}`
        this.setState({
            startDate,
            endDate,
            startDateUnix: Math.round((new Date(start)).getTime() / 1000),
            endDateUnix: Math.round((new Date(end)).getTime() / 1000)
        })
    }

    resetData() {
        const DBOpenRequest = window.indexedDB.open("openModal", 1);
        DBOpenRequest.onsuccess = (evt) => {
            const db = DBOpenRequest.result
            var transaction = db.transaction(["openModal"], "readwrite");
            var objectStore = transaction.objectStore("openModal");
            var request = objectStore.getAll()
            const startDate = new Date(this.props.startDate * 1000)
            const endDate = new Date(this.props.endDate * 1000)
            const formatedStartDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`
            const formatedEndDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`
            request.onsuccess = (evt) => (
                this.setState({
                    data: evt.target.result,
                    startDate: formatedStartDate,
                    endDate: formatedEndDate
                }, () => this.props.updateData(this.state.data))
            )
            $('.check-variation').removeClass('variation-select')
            $('#static').parent().addClass('variation-select')
        }
        DBOpenRequest.result.close()
    }

    componentDidMount() {
        const startDate = new Date(this.props.startDate * 1000)
        const endDate = new Date(this.props.endDate * 1000)
        const formatedStartDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`
        const formatedEndDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`
        this.setState({
            data: this.props.data,
            startDate: formatedStartDate,
            endDate: formatedEndDate,
            startDateUnix: this.props.startDate,
            endDateUnix: this.props.endDate
        })
    }

    render() {
        const startDate = new Date(this.props.startDate * 1000)
        const endDate = new Date(this.props.endDate * 1000)
        const formatedStartDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`
        const formatedEndDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`
        return (
            <div className='menu-content'>
                <label htmlFor='update-mapdata' className='timeVar-btn' onClick={() => this.updateMap()}><input type='button' id='update-mapdata'></input>Update Map Data</label>
                <label htmlFor='reset-data' className='reset-btn'>
                    <i className="fas fa-undo"></i>
                    <input id='reset-data' type='button' onClick={() => this.resetData()}></input> Reset Data
                </label>
                <p>Select Date-Range to Analyze:</p>
                <DateRangePicker minDate={formatedStartDate} maxDate={formatedEndDate} startDate={formatedStartDate} endDate={formatedEndDate} onApply={this.editInterval}>
                    <label className='date-picker'>
                        <i className="far fa-calendar-alt calendar date-picker-icon"></i>
                    </label>
                </DateRangePicker>
                <p className='interval-display'>Start Date: {this.state.startDate}</p>
                <p className='interval-display'>End Date: {this.state.endDate}</p>
                <div>
                    <header>Intervals</header>
                    <div className='select-variation'>
                        <label htmlFor='static' className='check-variation variation-select' onClick={(evt) => this.editVariation(evt)}><input id='static' type='checkbox' name='variation'></input> Static</label>
                        <label htmlFor='year' className='check-variation' onClick={(evt) => this.editVariation(evt)}><input id='year' type='checkbox' name='variation'></input> Year</label>
                        <label htmlFor='month' className='check-variation' onClick={(evt) => this.editVariation(evt)}><input id='month' type='checkbox' name='variation'></input> Month</label>
                        <label htmlFor='day' className='check-variation' onClick={(evt) => this.editVariation(evt)}><input id='day' type='checkbox' name='variation'></input> Day</label>
                        <label htmlFor='hour' className='check-variation' onClick={(evt) => this.editVariation(evt)}><input id='hour' type='checkbox' name='variation'></input> Hour</label>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
    startDate: state.start,
    endDate: state.end
})

const mapDispatchToProps = dispatch => ({
    updateData: (data) => dispatch(changeData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeVariation)