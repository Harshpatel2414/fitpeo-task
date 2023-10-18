import React from 'react'
import User from './User'
import Navbtn from './Sidebarbtn'

const Sidebar = () => {

  return (
    <>
      <div className="smallNav">
          <img id="dashlogo" alt="logo" src="./images/menu.svg" />
          <h2>Dashboard</h2>
      </div>
      <div className="sidebar-small">
        <div className="dashHead">
          <img className="dashlogo" alt="logo" src="./images/menu.svg" />
          <h2>Dashboard</h2>
        </div>
        <Navbtn />
        <User />
      </div>
      <div className='sidebar'>
        <div className="dashHead">
          <img className="dashlogo" alt="logo" src="./images/gear.svg" />
          <h2>Dashboard</h2>
        </div>
        <Navbtn />
        <User />
      </div>
    </>
  )
}
export default Sidebar
