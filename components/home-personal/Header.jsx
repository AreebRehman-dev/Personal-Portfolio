'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import headerRevealDelay from '@/common/headerRevealDelay';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.header',
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1 },
      headerRevealDelay()
    );
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.jpg"
      data-overlay-dark="2"
    >
      {/* Daaen taraf ka visual: orbit rings + chhota neural network + skills.
          SVG hai taake har screen pe sharp rahe. Styles: app/globals.css */}
      <div className="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 600 600">
          <defs>
            <radialGradient id="hvCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fd5b38" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#fd5b38" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#fd5b38" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="300" cy="300" r="170" fill="url(#hvCore)" />

          <g className="hv-ring hv-ring-a">
            <circle cx="300" cy="300" r="270" className="hv-line" />
            <circle cx="553.7" cy="392.3" r="5" className="hv-node" />
            <circle cx="78.8" cy="454.9" r="3.5" className="hv-node-soft" />
            <circle cx="207.7" cy="46.3" r="4" className="hv-node" />
          </g>
          <g className="hv-ring hv-ring-b">
            <circle cx="300" cy="300" r="200" className="hv-line hv-dash" />
            <circle cx="334.7" cy="497" r="4" className="hv-node-soft" />
            <circle cx="112.1" cy="231.6" r="5" className="hv-node" />
            <circle cx="453.2" cy="171.4" r="3.5" className="hv-node-soft" />
          </g>
          <g className="hv-ring hv-ring-c">
            <circle cx="300" cy="300" r="130" className="hv-line hv-strong" />
            <circle cx="428" cy="322.6" r="3.5" className="hv-node" />
            <circle cx="216.4" cy="399.6" r="3" className="hv-node-soft" />
            <circle cx="255.5" cy="177.8" r="3.5" className="hv-node" />
          </g>

          <g className="hv-net" transform="translate(300 300) scale(1.45) translate(-300 -300)">
            {[260, 300, 340].flatMap((y1) =>
              [255, 285, 315, 345].map((y2) => (
                <line key={`a${y1}-${y2}`} x1="250" y1={y1} x2="300" y2={y2} />
              ))
            )}
            {[255, 285, 315, 345].flatMap((y1) =>
              [275, 325].map((y2) => (
                <line key={`b${y1}-${y2}`} x1="300" y1={y1} x2="350" y2={y2} />
              ))
            )}
            {[260, 300, 340].map((y) => (
              <circle key={`n1${y}`} cx="250" cy={y} r="5" />
            ))}
            {[255, 285, 315, 345].map((y) => (
              <circle key={`n2${y}`} cx="300" cy={y} r="5" />
            ))}
            {[275, 325].map((y) => (
              <circle key={`n3${y}`} cx="350" cy={y} r="6" className="hv-out" />
            ))}
          </g>
        </svg>

        <span className="hv-chip hv-chip-1"><i></i>AI Voice Agents</span>
        <span className="hv-chip hv-chip-2"><i></i>Custom LLMs</span>
        <span className="hv-chip hv-chip-3"><i></i>Workflow Automation</span>
        <span className="hv-chip hv-chip-4"><i></i>AI Web Apps</span>
        <span className="hv-chip hv-chip-5"><i></i>Backend APIs</span>
      </div>
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{' '}
                Hello there
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m Areeb <span className="main-color">Rehman</span>
              </h1>
              <h3>Full Stack AI Developer</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      I build production web apps with AI at their core.
                      React and Next.js on the front, Node and FastAPI behind,
                      fine tuned models in between.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">areebrehman411@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+92 315 444 1676</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">Gulzar-e-Hijri, Scheme 33, Karachi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
