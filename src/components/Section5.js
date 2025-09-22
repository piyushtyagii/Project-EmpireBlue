import React from 'react'
import lungs from '../assets/lungs.png'
import heart from '../assets/heart.png'
import capsule from '../assets/capsule.png'
import leaf from '../assets/leaf.png'
import vitamin from '../assets/vitamin.png'
import brain from '../assets/brain.png'


function Section5() {
    return (
        <section id="Section-5">
            <div id="Section-5-sub">
                <div id="Section5-sub-1">
                    <div id="Section5-sub-1-h3">
                        <h3>Health <span id="Section5-sub-1-h3-style">Benefits</span></h3>
                    </div>
                    <p id="Section5-sub-1-p">
                        <p>Discover the key nutrients and their powerful effects on your health</p>
                    </p>
                </div>
                <div id="Section5-sub-2">
                    <span className='Section5-sub2-text-part' id="Section5-sub2-1">
                        <span className="Section5-sub2-text-content">
                            <span className="Section5-sub2-text-h3">
                                <h3>Anthoxanthin</h3>
                            </span>
                            <span className="Section5-sub2-text-h4">
                                <h4>Healthy Bone</h4>
                            </span>
                            <span className="Section5-sub2-text-p">
                                <p>Antioxidant properties beneficial for <br /> cancer treatment and heart health.<br /> Improves blood flow and reduces<br /> oxidative stress.</p>
                            </span>
                        </span>
                        <span className="Section5-sub2-text-content">
                            <span className="Section5-sub2-text-h3">
                                <h3>Carotenoids</h3>
                            </span>
                            <span className="Section5-sub2-text-h4">
                                <h4>Immunity Booster</h4>
                            </span>
                            <span className="Section5-sub2-text-p">
                                <p>Essential for vitamin A production<br /> supporting immune health. Reduces<br /> inflammation and promotes eye health<br /> while aiding hair growth.</p>
                            </span>
                        </span>
                    </span>
                    <span id="Section5-sub2-2">
                        <div className="Section5-sub2-2-2imgs">
                            <img src={vitamin} alt="" className="corner-imgs" />
                            <img src={leaf} alt="" className="corner-imgs" />
                        </div>
                        <div id="Section5-sub2-2-middle">
                            <span id="Section5-sub2-2-middle-img-border1"><img src={lungs} alt="" /></span>
                            
                        </div>
                        <div className="Section5-sub2-2-2imgs">
                            <img src={capsule} alt="" className="corner-imgs" />
                            <img src={heart} alt="" className="corner-imgs" />
                        </div>
                        <div id="Section5-sub2-2-last">
                            <img src={brain} alt="" className="corner-imgs" />
                        </div>
                    </span>
                    <span className='Section5-sub2-text-part' id="Section5-sub2-3">
                        <span className='Section5-sub2-text-part'>
                            <span className="Section5-sub2-text-content">
                                <span className="Section5-sub2-text-h3">
                                    <h3>Chlorophyl</h3>
                                </span>
                                <span className="Section5-sub2-text-h4">
                                    <h4>Healthy Lungs</h4>
                                </span>
                                <span className="Section5-sub2-text-p">
                                    <p>Strengthens the immune system and helps<br /> block cancer-causing chemicals. Aids in<br /> weight loss and lowers cholesterol levels.</p>
                                </span>
                            </span>
                            <span className="Section5-sub2-text-content">
                                <span className="Section5-sub2-text-h3">
                                    <h3>Lycopene</h3>
                                </span>
                                <span className="Section5-sub2-text-h4">
                                    <h4>Healthy Heart</h4>
                                </span>
                                <span className="Section5-sub2-text-p">
                                    <p>Powerful antioxidant that reduces<br /> oxidative damage and inflammation.<br /> Protects against various cancers and<br /> supports heart health.</p>
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
                <div id="Section5-sub-3">
                    <span className="Section5-sub2-text-content">
                            <span className="Section5-sub2-text-h3">
                                <h3>Anthocyanin</h3>
                            </span>
                            <span className="Section5-sub2-text-h4">
                                <h4>Healthy Brains</h4>
                            </span>
                            <span className="Section5-sub2-text-p">
                                <p>Lowers blood pressure and reduces the<br/> risk of heart disease. Protects brain<br/> function and may slow cancer growth.</p>
                            </span>
                        </span>
                </div>
            </div>
        </section>
    )
}

export default Section5