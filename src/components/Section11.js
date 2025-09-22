import React, { useState } from 'react'

function Section11() {
    const content = [
        {
            p: `"Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!"`,
            shortname: "PS",
            name: "Priya Sharma",
            role: "Health Coach",
            location: "Mumbai"

        },
        {
            p: `"As a restaurant owner, I need reliable water suppliers. Newtro-X has been exceptional - consistent quality, great pricing, and excellent customer service. Highly recommended!"`,
            shortname: "RK",
            name: "Rakesh Kumar",
            role: "Restaurant Owner",
            location: "Delhi"

        },
        {
            p: `"I recommend Newtro-X to all my patients' families. The bacteria-free technology gives me peace of mind, and the health benefits are remarkable. A must-have for every household."`,
            shortname: "MP",
            name: "Meera Patel",
            role: "Pediatrician",
            location: "Bangalore"

        },
        {
            p: `"Since switching to Newtro-X, my energy levels have improved significantly. The mineral content is perfect for post-workout hydration. My gym members love it!"`,
            shortname: "AS",
            name: "Amit Singh",
            role: "Fitness Trainer",
            location: "Pune"

        },
        {
            p: `"Pure water is essential for my yoga practice. Newtro-X delivers exactly what it promises - pure, healthy water that supports my wellness journey. Absolutely love it!"`,
            shortname: "KR",
            name: "Kavita Reddy",
            role: "Fitness Instructor",
            location: "Hyderabad"

        }
    ]
    const [currentInd, setCurrentInd] = useState(0);
    const next = () => {
        setCurrentInd((prev) => (prev + 1) % content.length)
    }
    const prev = () => {
        setCurrentInd((prev) => (prev === 0) ? (content.length - 1) : (prev - 1))
    }
    const currentContent = content[currentInd];
    return (
        <section id="Section-11">
            <div id="Section11-sub">
                <div id="Section11-sub-1">
                    <h4>What Our <span id="Section11-sub1-h4-style">Customers</span> Say</h4>
                    <p>Don't just take our word for it. Here's what our valued customers have to say<br /> about their experience with Newtro-X.</p>
                </div>
                <div id="Section11-sub-2">
                    <span id="Section11-sub2-left" className='Section11-sub2-leftrightbtn' onClick={prev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-6 h-6 text-primary" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                    </span>
                    <span id="Section11-sub2-middle">
                        <div id="Section11-sub2-middle-1">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        </div>
                        <div id="Section11-sub2-middle-2">
                            <p>{currentContent.p}</p>
                        </div>
                        <div id="Section11-sub2-middle-3"><h2>{currentContent.shortname}</h2>
                            <h3>{currentContent.name}</h3>
                            <h4>{currentContent.role}</h4>
                            <h5>{currentContent.location}</h5>
                        </div>
                        <div id="Section11-sub2-middle-4">
                            {content.map((_, index) => (
                                <span key={index} className="Section11-sub-4-dots" id="Section11-sub-4-dot1" style={{
                                    backgroundColor: index === currentInd ? "#09009b" : "white",
                                }}></span>
                            ))}

                        </div>
                    </span>
                    <span id="Section11-sub2-right" className='Section11-sub2-leftrightbtn' onClick={next}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-6 h-6 text-primary" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                    </span>
                </div>
                <div id="Section11-sub-3">
                    <span className="Section11-sub3-text">
                        <h4>4.9/5</h4>
                        <p>Average Rating</p>
                    </span>
                    <span className="Section11-sub3-line"></span>
                    <span className="Section11-sub3-text">
                        <h4>98%</h4>
                        <p>Satisfaction Rate</p>
                    </span>
                    <span className="Section11-sub3-line"></span>
                    <span className="Section11-sub3-text">
                        <h4>10k+</h4>
                        <p>Happy Customers</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Section11