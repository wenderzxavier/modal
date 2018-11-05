import React from "react";
import MarkerData from "../../../utils/MarkerData";
import $ from 'jquery'
import "../../../styles/MenuItems.css";

const changeColor = () => {
    let newColor = $('#markerColor').val()
    console.log(newColor)
    $('.marker-type svg').css('fill', newColor)
}

const Marker = () => (
  <div>
    <div className="menu-content menu-wrap">
      {MarkerData.map((marker, key) => (
        <label key={key} className="marker-type">
          {marker.icon}
        </label>
      ))}
    </div>
    <div className="menu-content">
      <input
        id="markerColor"
        type="color"
        name="markerColor"
        defaultValue="#ffffff"
        onChange={changeColor}
      />
      <p>Select Marker Color</p>
    </div>
  </div>
);

export default Marker;
