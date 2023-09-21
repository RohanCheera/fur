import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header-main'>
            FurEver Companion
        </div>
        <div className='header-navs'>
        <NavLink className='header-nav' to={'./'}>Home</NavLink>        
        <NavLink className='header-nav' to={'./work'}>Our Work</NavLink>        
        <NavLink className='header-nav' to={'./action'}>Take Action</NavLink>        
        <NavLink className='header-nav' to={'./blog'}>Blogs</NavLink>        
        <NavLink className='header-nav' to={'./about'}>About Us</NavLink>        
         
{/* 
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
        </div> */}
        </div>
    </div>
  )
}

export default Header