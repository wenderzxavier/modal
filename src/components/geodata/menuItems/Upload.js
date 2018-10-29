import React from "react";
import "../../../styles/MenuItems.css";

const previewData = (file) => (
    console.log(file)
)

const Upload = () => (
    <div className="menu-content">
        <form action="/">
            <div className='input-area menu-content'>
                <label htmlFor="input-data" className="input-item">
                    <input id="input-data" className='input-btn' type="file" accept=".csv,.json" onChange={previewData(this)}/>
                </label>
            </div>
            <div>
                <input id='submit-data' type='submit' value='Submit' name='submit'></input>
            </div>
        </form>
    </div>
);

export default Upload;
