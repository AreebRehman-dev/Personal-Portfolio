'use client';
import React, { useEffect } from 'react';

// Session me sirf pehli load pe loader dikhta hai. Flag sessionStorage me
// jata hai, isliye tab band karke dobara kholne pe phir se chalega.
const SEEN_KEY = 'areeb-loader-shown';

// Ye inline script loader ke markup se PEHLE parse hota hai, isliye jab
// loader skip karna ho to wo ek frame ke liye bhi flash nahi karta.
// (useEffect se hide karte to pehla paint ho chuka hota.)
const SKIP_SNIPPET = `try{if(sessionStorage.getItem('${SEEN_KEY}')==='1'){document.documentElement.classList.add('skip-loader')}}catch(e){}`;

function LoadingScreen() {
  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === '1';
    } catch (e) {
      // private mode wagera me sessionStorage throw kar sakta hai
    }

    // Pehle dekh chuke hain -> animation skip, loader chhupa hua rehne do
    if (seen) {
      document.documentElement.classList.add('skip-loader');
      return;
    }

    const markSeen = () => {
      try {
        window.sessionStorage.setItem(SEEN_KEY, '1');
      } catch (e) {}
    };

    let waited = 0;
    const hide = () => {
      const wrap = document.querySelector('.loader-wrap');
      if (wrap) {
        wrap.style.zIndex = -1;
        wrap.style.display = 'none';
      }
    };
    const interval = setInterval(() => {
      // gsap na mile to 3s baad loader ko waise hi hata do
      waited += 100;
      if (waited >= 3000 && typeof gsap === 'undefined') {
        clearInterval(interval);
        hide();
        markSeen();
        return;
      }
      if (typeof gsap !== 'undefined') {
        clearInterval(interval);
        markSeen();
        const svg = document.getElementById('svg');
        const tl = gsap.timeline();
        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
          delay: 1.5,
          y: -100,
          opacity: 0,
        });
        tl.to(svg, {
          duration: 0.5,
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 0.5,
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
        tl.to('.loader-wrap', { y: -1500 });
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
        tl.from('header', { y: 200 }, '-=1.5');
        tl.from(
          'header .container',
          { y: 40, opacity: 0, delay: 0.3 },
          '-=1.5'
        );
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SNIPPET }} />
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
