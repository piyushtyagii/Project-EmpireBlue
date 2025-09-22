import React from 'react'
import can1 from '../assets/can1.png'
import logo1 from '../assets/image.png'

function Section1() {
  return (
    <div id="Section-1">
        <div id="Section1-sub1">
            <span id="Section1-sub1-left">
                <img src={can1} alt="" />
            </span>
            <span id="Section1-sub1-right">
                <span id="Section1-sub1-right-img">
                    <img src={logo1} alt="" />
                </span>
                <span id="Section1-sub1-right-text">
                    <h1 id="Section1-sub1-right-text-h1">
                        World's First <br/> Non-Expiry Water
                    </h1>
                    <p id="Section1-sub1-right-text-p">Empire Blue Pvt. Ltd. We prioritize health, innovation, and  <br/> sustainability we are committed to seating new industry <br/> standards and providing a safe, reliable and beneficial <br/> hydration solution for people worldwide.</p>
                </span>
                <span id="Section1-sub1-right-button">
                    <button>Contact Us</button>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Section1