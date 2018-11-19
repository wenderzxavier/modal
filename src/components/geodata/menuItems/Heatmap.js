import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import heatmapGradients from '../../../utils/HeatGradients'
import { changeGradient } from '../../../actions'
import '../../../styles/MenuItems.css'

class Heatmap extends Component {
    state = {
        name: ''
    }

    updateGradient() {
        let gradientName = this.state.name
        let gradientCode = heatmapGradients.filter(gradient => gradient.id === gradientName)[0]['gradient']
        this.props.updateGradient(gradientName, gradientCode)
    }

    changeGradient(evt) {
        let id = evt.target.id
        $(`.gradient-scale`).removeClass('gradient-select')
        this.setState({
            name: id
        }, () => $(`#${id}`).addClass('gradient-select'))
    }

    componentDidMount() {
        this.setState({
            name: this.props.gradient
        }, () => {
            $(`#${this.props.gradient}`).addClass('gradient-select')
        })
    }

    render() {
        return (
            <div className='menu-content'>
                <h1>Alter Heatmap Style</h1>
                <input type='button' value='Update Style' className='heatmap-btn' onClick={() => this.updateGradient()}></input>
                {heatmapGradients.map((gradient, key) => (
                    <div className='gradient' key={key}>
                        <p>{gradient.name}</p>
                        <div id={gradient.id} className='gradient-scale' style={{ backgroundImage: `url(${gradient.img})` }} onClick={(evt) => this.changeGradient(evt)}></div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateGradient: (name, gradient) => dispatch(changeGradient(name, gradient)),
})

const mapStateToProps = state => ({
    gradient: state.heatmap.name
})

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap)