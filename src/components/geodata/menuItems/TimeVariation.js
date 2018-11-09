import React, { Component } from 'react'
import { changeData } from '../../../actions';
import { connect } from 'react-redux'
import $ from 'jquery'
import DateRangePicker from 'react-bootstrap-daterangepicker'
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import '../../../styles/MenuItems.css'

class TimeVariation extends Component {
    state = {
        db: undefined,
        data: [],
        interval: ''
    }

    editInterval(evt) {
    }

    resetData() {
        const { db } = this.state
        console.log(this.state)
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
        request.onsuccess = (evt) => {
            this.setState({
                db: evt.target.result
            })
        }
    }

    render() {
        return (
            <div className='menu-content'>
                <input type='button' value='Update Map Data'></input>
                <label htmlFor='reset-data'><i className="fas fa-undo"></i><input id='reset-data' type='button' value='Reset Data' onClick={() => this.resetData()}></input></label>
                <label>
                    <DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
                    <p>This is my Calendar</p>
                    </DateRangePicker>
                </label>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    updateData: (data) => dispatch(changeData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeVariation)