import React, { Component } from "react";
import $ from 'jquery'
import "../../../styles/MenuItems.css";

class Upload extends Component {
    state = {
        fileName: '',
        fileSize: ''
    }

    previewData() {
        let file = $('#input-data')[0].files[0]
        console.log(file)
        this.setState({
            fileName: file.name,
            fileSize: file.size
        })

    }

    render() {
        const { fileName, fileSize } = this.state
        return (
            <div className="menu-content">
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
                            <div>
                                <input id='submit-data' type='submit' value='Submit' name='submit'></input>
                            </div>
                        </div>
                    }
                </form>
            </div>
        )
    }
}

export default Upload;
