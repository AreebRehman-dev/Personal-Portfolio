import React from 'react';
import social from '@/data/social.json';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo text-logo md-mb80">
              <span className="text-logo-name">Areeb</span>
              <span className="text-logo-dot">.</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                Gulzar-e-Hijri, Scheme 33 <br /> Karachi, Pakistan
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:areebrehman411@gmail.com">
                  areebrehman411@gmail.com
                </a>
              </h6>
              <a href="tel:+923154441676" className="underline">
                <span className="fz-22 main-color">+92 315 444 1676</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/portfolio-grid">Portfolio</a>
                </li>
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column">
              <h6 className="sub-title mb-30">Elsewhere</h6>
              {/* Links data/social.json se aate hain */}
              <ul className="rest social-icon d-flex align-items-center">
                {social.map((item, i) => (
                  // Template ka "hover-this" magnetic effect icon ko mouse se
                  // door khiska deta tha, aur click khaali <li> pe lagta tha.
                  <li key={item.name} className={i ? 'ml-10' : ''}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-circle"
                      aria-label={item.name}
                    >
                      <i className={item.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <h6 className="mt-40 fz-14 opacity-7 fw-400">
                Available for freelance work
              </h6>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2026 <span className="main-color">Areeb Rehman</span>. Full
              Stack AI Developer, built with Next.js in Karachi.
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
