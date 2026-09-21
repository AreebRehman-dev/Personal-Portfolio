import React from 'react';

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Category :</span>
                <h6>AI SaaS</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Live :</span>
                <h6>
                  <a href="https://ovx-ai.com/" target="_blank" rel="noreferrer">
                    ovx-ai.com
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Stack :</span>
                <h6>Next.js, FastAPI</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Role :</span>
                <h6>Full Stack &amp; AI</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">01 . The Challenge</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                    Teams were running AI tasks one at a time, by hand, across
                    tools that did not talk to each other, so the work that
                    mattered kept waiting on the work that could be automated.
                  </h5>
                  {/* TODO: Areeb — apne alfaaz me badal lena, ye main ne
                      project ke naam aur category se andaza laga kar likha hai. */}
                  <p className="fz-18">
                    The pieces existed separately: models that worked, data that
                    was clean enough, and people who knew what to do with both.
                    What was missing was anything holding them together. Every
                    run started from scratch, and nothing that worked once could
                    be relied on to work the same way twice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
