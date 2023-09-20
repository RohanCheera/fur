import React from 'react';
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header-main'>
            FurEver Companion
        </div>
        <div className='header-navs'>
        <div className='header-nav'>
            Home 
        </div>
        <div className='header-nav'>
            Our Work
        </div>
        <div className='header-nav'>
            Take Action
        </div>
        <div className='header-nav'>
            Blogs
        </div>
        <div className='header-nav'>
            About Us
        </div>
        </div>
    </div>
  )
}

export default Header