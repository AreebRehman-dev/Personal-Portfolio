'use client';
import React from 'react';

function FAQS() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="page-faqs section-padding pb-0 position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">
                  Before you get in touch
                </h6>
                <h3>
                  The questions clients <br /> ask me most.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>What exactly do you build?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">Full stack web applications with AI built into them. React or Next.js on the front, Node, Express or FastAPI behind it, and the AI layer connecting the two. That covers voice agents, chatbots, n8n automations and fine tuned models.</p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Can you work with a codebase that already exists?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">Yes, and most of my work is exactly that: adding AI features to a product that already has users. I read the code first, match the conventions already there, and ship in small pieces so nothing breaks while you keep running.</p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Do you use APIs like OpenAI, or train your own models?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">Whichever is right for the job. An API is faster and cheaper for most features. When accuracy in your domain matters, or the data cannot leave your servers, I fine tune an open model with LoRA, QLoRA or DPO instead.</p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div onClick={openAccordion} className="title">
                    <h6>How does a project usually run?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">A short call to understand the problem, then a written scope with a fixed price and timeline. After that I work in weekly checkpoints, so you see something running every week instead of a black box for two months.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img1">
        <img src="/assets/imgs/intro/03.jpg" alt="" />
      </div>
      <div className="img2">
        <img src="/assets/imgs/arw0.png" alt="" />
      </div>
      <div className="img3">
        <img src="/assets/imgs/intro/04.jpg" alt="" />
      </div>
    </section>
  );
}

export default FAQS;
