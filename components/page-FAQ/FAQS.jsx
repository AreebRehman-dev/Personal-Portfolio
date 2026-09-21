'use client';
import React from 'react';
import Accordion from '@/components/common/Accordion';

const ITEMS = [
  {
    q: "What exactly do you build?",
    a: "Full stack web applications with AI built into them. React or Next.js on the front, Node, Express or FastAPI behind it, and the AI layer connecting the two. That covers voice agents, chatbots, n8n automations and fine tuned models.",
  },
  {
    q: "Can you work with a codebase that already exists?",
    a: "Yes, and most of my work is exactly that: adding AI features to a product that already has users. I read the code first, match the conventions already there, and ship in small pieces so nothing breaks while you keep running.",
  },
  {
    q: "Do you use APIs like OpenAI, or train your own models?",
    a: "Whichever is right for the job. An API is faster and cheaper for most features. When accuracy in your domain matters, or the data cannot leave your servers, I fine tune an open model with LoRA, QLoRA or DPO instead.",
  },
  {
    q: "How does a project usually run?",
    a: "A short call to understand the problem, then a written scope with a fixed price and timeline. After that I work in weekly checkpoints, so you see something running every week instead of a black box for two months.",
  },
];

function FAQS() {
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
              <Accordion items={ITEMS} />
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
