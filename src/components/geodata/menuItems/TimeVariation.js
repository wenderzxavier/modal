import React, { Component } from 'react'
import { changeData } from '../../../actions';
import { connect } from 'react-redux'
import '../../../styles/MenuItems.css'

class TimeVariation extends Component {
    state = {
        db: undefined,
        data: []
    }

    resetData() {
        const { db } = this.state
        var transaction = db.transaction(["openModal"], "readwrite");
        var objectStore = transaction.objectStore("openModal");
        var request = objectStore.getAll()
        request.onsuccess = (evt) => (
            this.setState({
                data: evt.target.result
            })
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
                <label htmlFor='from'>From:
                <input type='text' id='from' name='from'/>
                </label>
                <label htmlFor="to">TO
                <input type="text" id="to" name="to"/> 
                </label>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateData: (data) => dispatch(changeData(data))
})

export default connect(mapDispatchToProps)(TimeVariation)