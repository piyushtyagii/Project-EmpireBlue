import React from 'react'
import detail from '../assets/detail.png'
import excellence from '../assets/excellence.svg'
import pure from '../assets/pure.svg'
import eco from '../assets/eco.svg'
function Section4() {
  return (
    <section id="Section-4">
        <div id="Section4-sub">
            <div id="Section4-sub-top">
                <span id="Section4-sub-top-left">
                    <img src={detail} alt="" />
                </span>
                <span id="Section4-sub-top-right">
                    <span id="Section4-sub-top-right-text">
                        <h3 id="Section4-sub-top-right-text-h3">Empire Blue Pvt. Ltd.</h3>
                        <p id="Section4-sub-top-right-text-p">Our revolutionary water technology is a groundbreaking invention that<br/> eliminates the expiration date on bottled water. By using a unique combination<br/> of innovative ingredients, we prevent reactions in bottled water—especially<br/> when exposed to sunlight—that produce microplastics and harmful bacteria.<br/> This addresses major health risks associated with bottled water, including<br/> diseases like cancer and heart disease. Our innovation not only maintains<br/> water purity and freshness for life, but also provides health benefits such as<br/> cancer prevention, heart attack protection, and boosted immunity. With a<br/> global reach, we aim to transform the water industry and provide safe drinking<br/> water to the billions of people who currently lack access.</p>
                    </span>
                </span>
            </div>
            <div id="Section4-sub-bottom">
                <span id="Section4-sub-bottom-1" className='Section4-sub-bottom-items'>
                    <div className="Section4-sub-bottom-icon">
                        <img src={excellence} alt="" />
                    </div>
                    <div className="Section4-sub-bottom-h3">
                        <h3>Revolutionary Technology</h3>
                    </div>
                    <div className="Section4-sub-bottom-p">
                        <p>Groundbreaking invention that eliminates the<br/> expiration date on bottled water</p>
                    </div>
                </span>
                <span id="Section4-sub-bottom-2" className='Section4-sub-bottom-items'>
                      <div className="Section4-sub-bottom-icon">
                        <img src={pure} alt="" />
                    </div>
                    <div className="Section4-sub-bottom-h3">
                        <h3>Safe & Pure</h3>
                    </div>
                    <div className="Section4-sub-bottom-p">
                        <p>Ensuring lifelong freshness and health<br/> through advanced purification</p>
                    </div>
                </span>
                <span id="Section4-sub-bottom-3" className='Section4-sub-bottom-items'>
                      <div className="Section4-sub-bottom-icon">
                        <img src={eco} alt="" />
                    </div>
                    <div className="Section4-sub-bottom-h3">
                        <h3>Sustainable Solution</h3>
                    </div>
                    <div className="Section4-sub-bottom-p">
                        <p>Eco-friendly approach to water preservation<br/> and distribution</p>
                    </div>
                </span>

            </div>
        </div>
    </section>
  )
}

export default Section4