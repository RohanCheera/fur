import React from 'react';
import './layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Layout