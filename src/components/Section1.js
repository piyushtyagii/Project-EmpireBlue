import React from 'react'
import can1 from '../assets/can1.png'
import logo1 from '../assets/image.png'

function Section1() {
  return (
    <>
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
        <div id="Section1-sub2"><svg class="w-full h-[120px] sm:h-[200px] lg:h-[220px]" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0" stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z" fill="#D7E0E7" filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"></path></svg></div>
    </>
  )
}

export default Section1