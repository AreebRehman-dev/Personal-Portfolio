import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">What I Do</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>AI Integrated Web Apps</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Next.js</span>
                  <span className="tag">FastAPI</span>
                </div>
                <p>
                  Full stack applications with LLM features designed in from the start, not bolted on later.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>AI Automation</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Voice Agents</span>
                  <span className="tag">n8n</span>
                </div>
                <p>
                  Custom voice agents, Vapi integrations, chatbots and workflows that take repetitive work off your team.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Model Fine Tuning</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">LoRA</span>
                  <span className="tag">DPO</span>
                </div>
                <p>
                  Pretraining, LoRA, QLoRA and DPO. Models tuned on your data so they answer the way your business needs.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
