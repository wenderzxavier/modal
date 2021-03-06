import React, { Component } from "react";
import $ from 'jquery'
import { connect } from 'react-redux'
import "../../../styles/MenuItems.css";
import { changeData, changeDates, changeVariation } from "../../../actions";
import { reduceData } from '../func'

const uuidv1 = require('uuid/v1');

class Upload extends Component {
    state = {
        fileName: '',
        fileSize: '',
        data: []
    }

    populateDB(evt) {
        evt.preventDefault()
        $('#progress').text('Populating data....\nWait a moment.')
        const reader = new FileReader()
        reader.readAsText($('#input-data')[0].files[0])
        reader.onload = (evt) => {
            let csv = evt.target.result
            const allTextLines = csv.split(/\r\n|\n/)
            const DBOpenRequest = window.indexedDB.open("openModal", 1);
            DBOpenRequest.onsuccess = (evt) => {
                const db = DBOpenRequest.result
                var transaction = db.transaction(["openModal"], "readwrite");
                var objectStore = transaction.objectStore("openModal");
                var minDate = Math.round(new Date().getTime() / 1000)
                var maxDate = 0
                for (let i = 1; i < allTextLines.length; i++) {
                    let data = allTextLines[i].split(';')
                    if ( Object.keys(data).length === 5 ) {
                        let coordinates = data[1].split(',')
                        let unixTime = new Date(data[2]).getTime() / 1000
                        if (unixTime <= minDate) minDate = unixTime
                        if (unixTime >= maxDate) maxDate = unixTime
                        objectStore.add({
                            id: uuidv1(),
                            name: data[0],
                            coordinates: coordinates,
                            timestamp: unixTime,
                            load: parseInt(data[3], 10),
                            group: parseInt(data[4], 10)
                        });
                    }   
                }
                console.log('Completed')
                var request = objectStore.getAll()
                request.onsuccess = (evt) => {
                    const displayData = reduceData(evt.target.result)
                    this.setState({
                        data: displayData
                    }, () => {
                        this.props.dataToMap(this.state.data)
                        this.props.changeDates(minDate, maxDate)
                        this.props.changeVariation('static', minDate, maxDate)
                        $('#input-section').css('display', 'none')
                        $('#submitBtn').css('display', 'none')
                        $('#progress').text('Done. You can start using GeoModal')
                        $('.data-upload').css('display', 'none')
                        $('.data-analyses').css('display', 'flex')                                
                        $('.data-analyses-variation').css('display', 'flex')                                
                    })
                }
            }
        }
    }

    createDB(evt) {
        if (evt){
            let file = evt.target.files[0]
            this.setState({
                fileName: file.name,
                fileSize: file.size
            })    
        }
        const indexedDB = window.indexedDB ||    // Use the standard DB API
            window.mozIndexedDB ||             // Or Firefox's early version of it
            window.webkitIndexedDB;            // Or Chrome's early version   
        const dbVersion = 1
        const req = indexedDB.open('openModal', dbVersion, { storage: 'temporary' })
        req.onerror = () => console.log('Database failed to open')
        req.onsuccess = () => console.log('Database opened successfully');
        req.onupgradeneeded = function (evt) {
            var db = evt.target.result;
            // Create an objectStore for this database
            var objectStore = db.createObjectStore("openModal", { keyPath: "id" });
            // define what data items the objectStore will contain
            objectStore.createIndex("name", "name", { unique: false });
            objectStore.createIndex("coordinates", "coordinates", { unique: false });
            objectStore.createIndex("timestamp", "timestamp", { unique: false });
            objectStore.createIndex("load", "load", { unique: false });
            objectStore.createIndex("group", "group", { unique: false });
        };
    }

    startEmptyMap(){
        this.createDB(undefined)
        let date = Math.round(new Date().getTime() / 1000)
        this.props.changeDates(date, date)
        this.props.changeVariation('static', date, date)
        $('#menu-selected').css('width', '0px')
        $('.data-upload').css('display', 'none')
        $('.data-analyses').css('display', 'flex')                           
    }

    render() {
        const { fileName, fileSize } = this.state
        const indexedDB = window.indexedDB ||    // Use the standard DB API
            window.mozIndexedDB ||             // Or Firefox's early version of it
            window.webkitIndexedDB;            // Or Chrome's early version
        return (
            <div className="menu-content">
                {indexedDB ? (
                    <form action="/">
                        <div className='input-area menu-content' id='input-section'>
                            <label htmlFor="input-data" className="input-item">
                                <i className="fas fa-file-upload fa-lg"></i>Upload File
                        <input id="input-data" className='input-btn' type="file" accept=".csv,.json" onChange={(evt) => this.createDB(evt)} />
                            </label>
                            <p className='startEmpty' onClick={() => this.startEmptyMap()}> or Start with Blank Map</p>
                        </div>
                        {fileName === '' ? '' :
                            <div>
                                <div id='file-info'>
                                    <p>File: {fileName}</p>
                                    <p>Size: {fileSize / 1000}KB</p>
                                </div>
                                <div id='submitBtn'>
                                    <input id='submit-data' type='submit' value='Submit' name='submit' onClick={(evt) => this.populateDB(evt)}></input>
                                </div>
                                <p id='progress'></p>
                            </div>
                        }
                    </form>
                ) : <p>Your browser does not support indexedDB. Please, try again using another browser.</p>}
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    dataToMap: (data) => dispatch(changeData(data)),
    changeDates : (start, end) => dispatch(changeDates(start, end)),
    changeVariation : (type, start, end) => dispatch(changeVariation(type, start, end))
})

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
