import React from 'react'
import { useEffect, useRef, useState } from "react";
function Section9() {
 
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) { //entries[0] means the first elementrt to which is into view
          started.current = true;
          animateCount(target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  function animateCount(target) {
    let i = 0;
    const step = Math.ceil(target / 200);//calculate interval for smooth increments
    const interval = setInterval(() => { 
      i += step; //har interval pe i+step hojayega 
      if (i >= target) {//handles overflow
        i = target;
        clearInterval(interval);
      }
      setCount(i);
    }, 10);
  }

  return (
    <span className="Section9-sub-box-num" id='1' ref={ref}>{count.toLocaleString()}</span>
  );
}
  return (
    <section id="Section-9">
        <div id="Section9-sub">
            <div id="Section9-sub-h1">
                <h1>Our <span id="Section9-sub-h1-style">Success </span>Story</h1>
            </div>
            <div id="Section9-sub-p">
                <p>Trusted by thousands of customers across India, delivering pure and healthy<br/> water solutions</p>
            </div>
            <div id="Section9-sub-boxes">
                <span className="Section9-sub-boxclass">
                    <span className="Section9-sub-box-icon" id='Section9-sub-box-icon1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-white" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    </span>
                    <span  className="Section9-sub-box-num" ><Counter target= {50000}/>+</span>
                    <span className="Section9-sub-box-text">Happy Customers</span>
                    <span className="Section9-sub-box-line" id='Section9-sub-box1-line'></span>
                </span>
                <span className="Section9-sub-boxclass">
                    <span className="Section9-sub-box-icon" id='Section9-sub-box-icon2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck text-white" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
                    </span>
                    <span  className="Section9-sub-box-num" ><Counter target= {100000}/>+</span>
                    <span className="Section9-sub-box-text">Orders Delivered</span>
                    
                    <span className="Section9-sub-box-line" id='Section9-sub-box2-line'></span>
                </span>
                <span className="Section9-sub-boxclass">
                    <span className="Section9-sub-box-icon" id='Section9-sub-box-icon3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package text-white" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
                    </span>
                    <span  className="Section9-sub-box-num" ><Counter target= {15}/>+</span>
                    <span className="Section9-sub-box-text">Products Launched</span>
                    
                    <span className="Section9-sub-box-line" id='Section9-sub-box3-line'></span>
                </span>
                <span className="Section9-sub-boxclass">
                    <span className="Section9-sub-box-icon" id='Section9-sub-box-icon4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up text-white" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    </span>
                    <span  className="Section9-sub-box-num" ><Counter target= {98}/>%</span>
                    <span className="Section9-sub-box-text">Satisfaction Rate</span>
                    
                    <span className="Section9-sub-box-line" id='Section9-sub-box4-line'></span>
                </span>
                <span className="Section9-sub-boxclass">
                    <span className="Section9-sub-box-icon" id='Section9-sub-box-icon5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award text-white" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                    </span>
                    <span  className="Section9-sub-box-num" ><Counter target= {25}/>+</span>
                    <span className="Section9-sub-box-text">Industry Awards</span>
                    
                    <span className="Section9-sub-box-line" id='Section9-sub-box5-line'></span>
                </span>
            </div>
            <span id="Section9-sub-line"></span>
        </div>
    </section>
  )
}

export default Section9