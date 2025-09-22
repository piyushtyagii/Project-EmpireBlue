import React from 'react'
import heart from '../assets/heart.png'
import star from '../assets/star1.png'
import setting from '../assets/setting1.png'
import right from '../assets/right1.png'
import earth from '../assets/earth.png'
import beaker from '../assets/beaker1.png'

function Section6() {
  return (
    <section id="Section-6">
        <div id="Section6-sub">
            <div id="Section6-sub-1">
                <h2>Competitive <span id='Section6-sub1-h2-style'>Advantage </span>beyond Ordinary</h2>
            </div>
            <div id="Section6-sub-2" className='Section6-sub-textRow'>
                <span className="Section6-sub2-box">
                    <img src={earth} alt="" className="Section6-sub2-box-icon" />
                    <h3>World's first non-expiry water</h3>
                    <p>Our revolutionary water that never expires, ensuring<br/> unmatched quality and freshness for decades, making it<br/> a unique choice in the modern world today.</p>
                </span>
                <span className="Section6-sub2-box">
                    <img src={heart} alt="" className="Section6-sub2-box-icon" />
                    <h3>Health benefits</h3>
                    <p>Unique water formulation helps prevent major health<br/> risks such as cancer and heart attacks while boosting the<br/> immune system for long-term vitality and daily wellness.</p>
                </span>
                <span className="Section6-sub2-box">
                    <img src={star} alt="" className="Section6-sub2-box-icon" />
                    <h3>Premium mineral enrichment</h3>
                    <p>Infused with essential minerals Newtro-X provides<br/> superior nourishment compared to regular bottled<br/> water, promoting overall health and energy all day long<br/> every day.</p>
                </span>
            </div>
            <div id="Section6-sub-3">
                <span className="Section6-sub3-num">1</span>
                <span className="Section6-sub3-line"></span>
                <span className="Section6-sub3-num">2</span>
                <span className="Section6-sub3-line"></span>
                <span className="Section6-sub3-num">3</span>
                <span className="Section6-sub3-line"></span>
                <span className="Section6-sub3-num">4</span>
                <span className="Section6-sub3-line"></span>
                <span className="Section6-sub3-num">5</span>
                <span className="Section6-sub3-line"></span>
                <span className="Section6-sub3-num">6</span>
            </div>
            <div id="Section6-sub-4" className='Section6-sub-textRow'>
                <span className="Section6-sub2-box">
                    <img src={right} alt="" className="Section6-sub2-box-icon" />
                    <h3>Bacteria free</h3>
                    <p>Ensure that never release microplastic or harmful<br/> bacteria, keeping the water clean and perfectly safe for<br/> everyone, anywhere, with consistent purity at every<br/> single sip.</p>
                </span>
                <span className="Section6-sub2-box">
                    <img src={setting} alt="" className="Section6-sub2-box-icon" />
                    <h3>Technology</h3>
                    <p>Utilization of cutting edge - ultra purification and<br/> preservation methods to maintain water qualities,<br/> offering unmatched performance and innovation in safe<br/> hydration.</p>
                </span>
                <span className="Section6-sub2-box">
                    <img src={beaker} alt="" className="Section6-sub2-box-icon" />
                    <h3>Preservation</h3>
                    <p>With no expiry date consumers can store the product<br/> indefinitely without the risk of contamination or quality<br/> degradation reducing frequent repurcesing cost.</p>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Section6