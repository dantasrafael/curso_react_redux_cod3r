import React from 'react'
import Navbar from './navbar'

export default () => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'>
                <i className='fa fa-money' />
            </span>
            <span className='logo-lg'>
                <i className='fa fa-money' />
                <b> My</b>Money
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas' />
            <Navbar />
        </nav>
    </header>
)