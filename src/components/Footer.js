import React from 'react'
import logo from '../assets/logo1.png'

function Footer() {
    const arr = [{
        p: "'Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!'",
        short: "PS",
        name: "Priya Sharma",
        profession: "Health Coach",
        place: "Mumbai"
    }]
    return (
        <footer id="Footer">
            <div id="Footer-sub">
                <div id="Footer-sub-1">
                    <span id="Footer-sub1-left">
                        <img src={logo} alt="" />
                        <p>Providing clean and safe water solutions<br /> for a healthier tomorrow. Our<br /> commitment to quality and innovation<br /> makes us the trusted choice in water<br /> treatment.</p>
                        <span id="Footer-sub1-left-svgs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-5 h-5" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter w-5 h-5" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-5 h-5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </span>
                    </span>
                    <span id="Footer-sub1-right">
                        <div id="Footer-sub1-right-grid">
                            <span className="Footer-sub1-right-column">
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-heading">Quick Links</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">About Us</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">Latest News</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">Test</span>
                            </span>
                            <span className="Footer-sub1-right-column">
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-heading">Our Services</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">Water Testing</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">Water Purification</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">Water Treatment</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">Expert Consultation</span>

                            </span>
                            <span className="Footer-sub1-right-column">
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-heading">Contact Us</span>
                                <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">
                                    <span className="Footer-sub1-right-grid-svgclass">
                                        <span className='Footer-right-svg'><svg class="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span><span>  Empire Blue Pvt. Ltd.<br />
                                            Chhindwara, Madhya Pradesh<br />
                                            India</span>
                                    </span>
                                    <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">
                                    <span className="Footer-sub1-right-grid-svgclass"><span className='Footer-right-svg'><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span><span>  +91 9958761679</span></span>
                                        
                                        </span>
                                    <span className="Footer-sub1-right-grid-item"></span>
                                    <span className="Footer-sub1-right-grid-item Footer-sub1-right-grid-normaltext">
                                        <span className="Footer-sub1-right-grid-svgclass">
                                        <span className='Footer-right-svg'><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span>  info@EmpireBlue.in</span></span>
                                        </span>
                                </span>

                            </span>
                        </div>
                    </span>
                </div>
                <div id="Footer-sub-2"></div>
                <div id="Footer-sub-3">
                    <span id="Footer-sub3-left" className='Footer-sub3-text'>© 2025 Empire Blue. All rights reserved.</span>
                    <span id="Footer-sub3-right" className='Footer-sub3-text'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer