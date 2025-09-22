import React from 'react'
import logo1 from '../assets/logo1.png'

function Header() {
  return (
    <header id="Header">
          <div id="Header-div">
            <div id="Header-sub-1">
            <span id="Header-sub1-left">
                <img src={logo1} alt="" />
            </span>
            <span id="Header-sub1-right">
                <span id="Header-sub1-right-sub1" className='Header-right-items'>
                  <p>Home</p>
                  <span className="Header-right-item-underline"></span>
                </span>
                <span id="Header-sub1-right-sub2" className='Header-right-items'>
                  <p>About Us</p>
                  <span className="Header-right-item-underline"></span>

                </span>
                <span id="Header-sub1-right-sub3" className='Header-right-items'>
                  <p>Service</p>
                  <span className="Header-right-item-underline"></span>
                </span>
                <span id="Header-sub1-right-sub4" className='Header-right-items'>
                 <p>Home</p>
                  <span className="Header-right-item-underline"></span>
                </span>
                <span id="Header-sub1-right-sub5">Book Now </span>
            </span>
        </div>
          </div>
    </header>
  )
}

export default Header