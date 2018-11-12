import React, { Component } from 'react'
import { changeData } from '../../../actions';
import { connect } from 'react-redux'
// import $ from 'jquery'
import DateRangePicker from 'react-bootstrap-daterangepicker'
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import '../../../styles/MenuItems.css'

class TimeVariation extends Component {
    constructor(props){
        super(props)
        this.editInterval = this.editInterval.bind(this)
    }

    state = {
        db: undefined,
        data: [],
        interval: 'none',
        startDate: '',
        endDate: '',
        startDateUnix: 0,
        endDateUnix: 0
    }

    updateStateInterval(startDate,endDate){
        this.setState({
            startDate,
            endDate
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
        const { db } = this.state
        var transaction = db.transaction(["openModal"], "readwrite");
        var objectStore = transaction.objectStore("openModal");
        var request = objectStore.getAll()
        request.onsuccess = (evt) => (
            this.setState({
                data: evt.target.result
            }, () => this.props.updateData(this.state.data))
        )
    }

    componentDidMount() {
        let request = indexedDB.open('openModal')
        const startDate = new Date(this.props.startDate * 1000)
        const endDate = new Date(this.props.endDate * 1000)
        const formatedStartDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`
        const formatedEndDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`
        request.onsuccess = (evt) => {
            this.setState({
                db: evt.target.result,
                startDate: formatedStartDate,
                endDate: formatedEndDate
            })
        }

    }

    render() {
        const startDate = new Date(this.props.startDate * 1000)
        const endDate = new Date(this.props.endDate * 1000)
        const formatedStartDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`
        const formatedEndDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`
        return (
            <div className='menu-content'>
                <label htmlFor='update-mapdata' className='timeVar-btn'><input type='button' id='update-mapdata'></input>Update Map Data</label>
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
                    <label><input type='button'></input> Static</label>
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