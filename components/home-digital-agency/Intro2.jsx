'use client';
import React from 'react';
import Accordion from '@/components/common/Accordion';

const ITEMS = [
  {
    q: "Scope before code",
    a: "A short call, then a written scope with a fixed price and timeline. You know what you are getting before anything is built.",
  },
  {
    q: "Weekly, working checkpoints",
    a: "Every week you get something you can click, not a status update. Course corrections happen while they are still cheap.",
  },
  {
    q: "Your codebase, your conventions",
    a: "If a codebase already exists, I match what is there rather than rewriting it around my preferences. Changes land in small, reviewable pieces.",
  },
];

function Intro2() {
  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/arw2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">How I work</h6>
                <h3>
                  What working with me <br /> actually looks like.
                </h3>
              </div>
              <Accordion items={ITEMS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
