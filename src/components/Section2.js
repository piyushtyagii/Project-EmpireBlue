import React from 'react'
import aboutimg from '../assets/about.png'

function Section2() {
  return (
    <div id="Section-2">
        <div id="Section2-sub">
            <span id="Section2-sub-left">
                <span id="Section2-sub-left-text">
                    <span id="Section2-sub-left-h1">
                <h1 >About <span id="Section2-sub-left-h1-shade">Us</span></h1>
                </span>
                <span id="Section2-sub-left-p">
                <p>
                    Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara<br/>Madhya Pradesh is a pioneering company in the bottled water<br/>industry recognized as the world's first manufacturer of non-expiry <br/> bacteria free water bottles.<br/><br/>

Our mission is to revolutionize the way people consume water by<br/> ensuring purity, longevity, and health benefits in every drop.
                </p>
                </span>
                </span>
                <span id="Section2-sub-left-button">
                    <button>Learn more</button>
                </span>
                
            </span>
            <span id="Section2-sub-right">
                <img src={aboutimg} alt="" />
            </span>
        </div>
    </div>
  )
}

export default Section2