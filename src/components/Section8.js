import React from 'react'
import year26 from '../assets/2026.png'
import year27 from '../assets/2027.png'
import year28 from '../assets/2028.png'
import year29 from '../assets/2029.png'
import year30 from '../assets/2030.png'
import arrow from '../assets/arrow.png'

function Section8() {
    return (
        <section id="Section-8">
            <div id="Section8-sub">
                <div id="Section8-sub-1">
                    <div id="Section8-sub1-1">
                        <h3>
                            <span>🏆</span>
                            <span>Our <span id="Section9-sub1-1-style">Milestones</span></span>
                        </h3>
                    </div>
                    <div id="Section8-sub1-2">
                        <span className="Section8-sub1-2-box"></span>
                        <span className="Section8-sub1-2-box">
                            <h4>
                                <span className="blue-color-text">Black Plum</span> <span className="black-color-text">Premium Segment</span>
                            </h4>
                            <p>
                                Launch of Colin, Dish Wash, Toilet Cleaner, and Floor<br /> Cleaner.
                            </p>
                        </span>
                        <span className="Section8-sub1-2-box">
                            <h4>
                                <span className="blue-color-text">Black Plum</span> <span className="black-color-text">Premium Segment</span>
                            </h4>
                            <p>
                                Launch of our premium brand with enhanced<br /> minerals and benefits.<br />

                                Premium glass bottle packaging, professional<br /> branding.
                            </p>
                        </span>
                    </div>
                </div>
                <div id="Section8-sub-2">
                    <span className="Section8-sub2-year">
                        <img src={year26} alt="" />
                    </span>
                    <span className="Section8-sub2-arrow">
                        <img src={arrow} alt="" />
                    </span>
                    <span className="Section8-sub2-year">
                        <img src={year27} alt="" />
                    </span>
                    <span className="Section8-sub2-arrow">
                        <img src={arrow} alt="" />
                    </span>
                    <span className="Section8-sub2-year">
                        <img src={year28} alt="" />
                    </span>
                    <span className="Section8-sub2-arrow">
                        <img src={arrow} alt="" />
                    </span>
                    <span className="Section8-sub2-year">
                        <img src={year29} alt="" />
                    </span>
                    <span className="Section8-sub2-arrow">
                        <img src={arrow} alt="" />
                    </span>
                    <span className="Section8-sub2-year">
                        <img src={year30} alt="" />
                    </span>
                </div>
                <div id="Section8-sub-3">
                    <span className="Section8-sub1-2-box">
                        <h4>
                            <span className="blue-color-text">Newtro-X </span> <span className="black-color-text">Project Kickoff</span>
                        </h4>
                        <p>
                            Launch of Newtro-X, our base segment brand.<br />

                            Introducing the world's first non-expiry water bottle.
                        </p>
                    </span>
                    <span className="Section8-sub1-2-box">
                        <h4>
                            <span className="blue-color-text">Our Vehicle Care</span> <span className="black-color-text">Segment Launch</span>
                        </h4>
                        <p>
                            Introduction of DM Water (battery), Coolant, and DEF<br /> Water.


                        </p>
                    </span>
                    <span className="Section8-sub1-2-box">
                        <h4>
                            <span className="blue-color-text">Java-X</span> <span className="black-color-text">Major Achievement</span>
                        </h4>
                        <p>
                            Launch of our highest premium segment brand with<br /> top enhancements.<br />

                            Super premium glass bottle, elite branding.
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Section8