import React from 'react'
import image from '../assets/innovation.png'
function Section7() {
  return (
    <section id="Section-7">
        <div id="Section7-sub">
            <span id="Section7-sub-left">
                <span id="Section7-sub-left-tagbox">
                    <span id="Section7-sub-left-tag">
                        <span id='Section7-sub-left-tag-dot'>&middot;</span>Water Innovation</span>
                    </span>
                <h2 id="Section7-sub-left-h2">Revolutionizing <span>Water</span><br/> Technology</h2>
                <p id="Section7-sub-left-p">We're pioneering the future of water technology with our<br/> groundbreaking innovation that eliminates expiration dates from<br/> bottled water, ensuring pure and safe drinking water for generations<br/> to come.</p>
                <span id="Section7-sub-left-buttons">
                    <button id='Section7-sub-left-btn1' className="Section7-sub-left-btnclass">Explore Technology</button>
                    <button id='Section7-sub-left-btn2' className="Section7-sub-left-btnclass">Learn More</button>
                </span>
            </span>
            <span id="Section7-sub-right">
                <img src={image} alt="" />
            </span>
        </div>
    </section>
  )
}

export default Section7