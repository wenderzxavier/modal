import React, { Component } from "react";
import $ from 'jquery'
import { connect } from 'react-redux'
import { changeMarker, changeMarkerColor } from '../../../actions'
import "../../../styles/MenuItems.css";
import AntennaIcon from '../../../img/geodata/AntennaIcon'
import BusIcon from '../../../img/geodata/BusIcon'
import CarIcon from '../../../img/geodata/CarIcon'
import MarkerIcon from '../../../img/geodata/MarkerIcon'
import PersonIcon from '../../../img/geodata/PersonIcon'
import PinIcon from '../../../img/geodata/PinIcon'

class Marker extends Component {
  state = {
    markerType: {},
    markerColor: {},
  }

  changeColor = (group) => {
    let newColor = $(`#groupColor-${group}`).val()
    let newColorArray = this.state.markerColor
    newColorArray[group] = newColor
    this.setState({
      markerColor: newColorArray
    })
  }

  changeMarker(evt, type, group) {
    $(`#markers-group-${group} label`).removeClass('selectedMarker')
    $(evt.currentTarget).addClass('selectedMarker')
    this.setState({
      markerType: {
        ...this.state.markerType,
        [group]: type
      }
    })
  }

  updateMarker() {
    this.props.updateMarker(this.state.markerType)
    this.props.updateMarkerColor(this.state.markerColor)
  }

  updateCurrentMarker() {
    let newColorArray = {...this.props.markerColor}
    let newMarkerArray = {...this.props.markerType}
    this.setState({
      markerColor: newColorArray,
      markerType: newMarkerArray
    })
  }

  componentDidMount(){
    this.updateCurrentMarker()
    $(`#${this.props.markerType[0]}-0`).addClass('selectedMarker')
    $(`#${this.props.markerType[1]}-1`).addClass('selectedMarker')
    $(`#${this.props.markerType[2]}-2`).addClass('selectedMarker')
    $(`#${this.props.markerType[3]}-3`).addClass('selectedMarker')
  }

  render() {
    const { markerColor } = this.props
    return (
      <div>
        <div className="menu-content">
          <input type='button' className='update-btn btn-hover' value='Update Markers' onClick={() => this.updateMarker()}></input>
          <p>You can toggle groups on the Layer Control at the top-right of the map</p>
        </div>
        {[0, 1, 2, 3].map((group, key) => (
          <div className='marker-group' key={key}>
            <p className='group-title'>Markers Group #{group}</p>
            <div className='color-picker'>
              <p>Color:</p>
              <input
                id={`groupColor-${group}`}
                type="color"
                name={`markerColor-${group}`}
                defaultValue={markerColor[group]}
                onChange={() => this.changeColor(group)}
              />
            </div>
            <div className='markertype-group' id={`markers-group-${group}`}>
              <label id={`marker-${group}`} onClick={(evt) => this.changeMarker(evt, 'marker', group)}><MarkerIcon fill={markerColor[group]} /></label>
              <label id={`pin-${group}`} onClick={(evt) => this.changeMarker(evt, 'pin', group)}><PinIcon fill={markerColor[group]} /></label>
              <label id={`antenna-${group}`} onClick={(evt) => this.changeMarker(evt, 'antenna', group)}><AntennaIcon fill={markerColor[group]} /></label>
              <label id={`bus-${group}`} onClick={(evt) => this.changeMarker(evt, 'bus', group)}><BusIcon fill={markerColor[group]} /></label>
              <label id={`car-${group}`} onClick={(evt) => this.changeMarker(evt, 'car', group)}><CarIcon fill={markerColor[group]} /></label>
              <label id={`person-${group}`} onClick={(evt) => this.changeMarker(evt, 'person', group)}><PersonIcon fill={markerColor[group]} /></label>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  markerColor: state.color,
  markerType: state.marker
})

const mapDispatchToProps = dispatch => ({
  updateMarker: (marker) => dispatch(changeMarker(marker)),
  updateMarkerColor: (color) => dispatch(changeMarkerColor(color))
})


export default connect(mapStateToProps, mapDispatchToProps)(Marker);
