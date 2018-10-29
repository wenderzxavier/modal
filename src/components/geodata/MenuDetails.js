import React, { Component } from 'react'
import MenuData from '../../utils/MenuData'
import $ from 'jquery'

class MenuDetails extends Component {
    onCloseMenu(){
        $('.menu-list li').removeClass('menu-active')
        $('#menu-selected').css('width', '0px')
    }

    render() {
        const { selectedMenu } = this.props
        const menuActive = MenuData.filter((menuItem) => menuItem.id === selectedMenu)[0]
        return (
            <div id='menu-selected'>
                <span className='close-menu-btn' onClick={() => this.onCloseMenu()}><i className="fas fa-angle-left fa-lg"></i></span>
                <div>
                    {menuActive ? menuActive.data : ''}
                </div>
            </div>
        )
    }
}

export default MenuDetails