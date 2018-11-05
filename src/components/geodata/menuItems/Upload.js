import React, { Component } from "react";
import $ from 'jquery'
import "../../../styles/MenuItems.css";

class Upload extends Component {
    state = {
        fileName: '',
        fileSize: ''
    }

    deleteDB(dbName){
        window.indexedDB.deleteDatabase('openModal')
    }

    populateDB(evt) {
        evt.preventDefault()
        const indexedDB = window.indexedDB ||    // Use the standard DB API
            window.mozIndexedDB ||             // Or Firefox's early version of it
            window.webkitIndexedDB;            // Or Chrome's early version   
        const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
        const IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
        const dbVersion = 1
        this.deleteDB('openModal')
        const req = indexedDB.open('openModal', dbVersion, {storage: 'temporary'})
        req.onerror = () => console.log('Database failed to open')
        req.onsuccess = () => console.log('Database opened successfully');
        let db = req.result
    }


    previewData() {
        let file = $('#input-data')[0].files[0]
        this.setState({
            fileName: file.name,
            fileSize: file.size
        })

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
                    <div className='input-area menu-content'>
                        <label htmlFor="input-data" className="input-item">
                            <i className="fas fa-file-upload fa-lg"></i>Upload File
                        <input id="input-data" className='input-btn' type="file" accept=".csv,.json" onChange={() => this.previewData()} />
                        </label>
                    </div>
                    {fileName === '' ? '' :
                        <div>
                            <div>
                                <p>File: {fileName}</p>
                                <p>Size: {fileSize / 1000}KB</p>
                            </div>
                            <div id='submitBtn'>
                                <input id='submit-data' type='submit' value='Submit' name='submit' onClick={(evt) => this.populateDB(evt)}></input>
                            </div>
                        </div>
                    }
                </form>
                ) : <p>Your browser does not support indexedDB. Please, try again using another browser.</p>}
            </div>
        )
    }
}

export default Upload;
