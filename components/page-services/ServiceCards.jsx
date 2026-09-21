import React from 'react';
import data from '@/data/services';

// Template ke "serv-boxs" cards sirf active card ka text dikhate the, baqi
// teen khaali lagte the. Ye cards har cheez hamesha dikhate hain.
// Styles: app/globals.css (.svc-*)

const ICONS = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18M8 12l-2 2 2 2M16 12l2 2-2 2" />
    </>
  ),
  voice: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
    </>
  ),
  model: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 7l3 3.5M7 17l3-3.5M14 10.5L17 7M14 13.5l3 3.5" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 3c3 2 5 5.5 5 9l-2.5 3h-5L7 12c0-3.5 2-7 5-9z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9.5 15L7 20l3-1.5M14.5 15L17 20l-3-1.5" />
    </>
  ),
};

function ServiceCards() {
  return (
    <section className="svc section-padding">
      <div className="container">
        <div className="row mb-60 align-items-end">
          <div className="col-lg-5">
            <h6 className="sub-title main-color mb-15">What I Offer</h6>
            <h3 className="svc-heading">
              Four ways I can help <br />
              <span className="fw-200">your product ship.</span>
            </h3>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <p className="svc-lede">
              Each engagement covers the full path: scope, build, and a working
              deployment. Pick one service or combine them, most projects need
              two or three.
            </p>
          </div>
        </div>

        <div className="svc-grid">
          {data.map((item, i) => (
            <a href={item.link} className="svc-card" key={item.title}>
              <div className="svc-top">
                <span className="svc-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{ICONS[item.icon]}</svg>
                </span>
                <span className="svc-num">0{i + 1}</span>
              </div>

              <h4 className="svc-title">{item.title}</h4>
              <p className="svc-desc">{item.desc}</p>

              <div className="svc-foot">
                <div className="svc-tags">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="svc-arrow ti-arrow-top-right" aria-hidden="true"></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
