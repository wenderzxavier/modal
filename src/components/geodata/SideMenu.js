import React, { Component } from 'react'
import $ from 'jquery'
import MenuData from '../../utils/MenuData'
import '../../styles/geodata.css'

class SideMenu extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(evt, func){
        $('.menu-list li').removeClass('menu-active')
        $(evt.target).addClass('menu-active')
        $('#menu-selected').css('width', '300px')
        func(evt.target.id)
    }

    render() {
        const updateMenu = this.props.updateMenu
        return (
            <div id='side-menu'>
                <ul className='menu-list' onClick={(evt) => this.handleClick(evt, updateMenu)}>
                    {MenuData.map((menuItem, key) => (
                        <li key={key} id={menuItem.id}>
                            {menuItem.icon}
                            {menuItem.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SideMenu