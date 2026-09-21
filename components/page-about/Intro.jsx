import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                I build <span className="fw-200">full stack web apps</span> with
                the <span className="fw-200">AI layer</span> designed in from
                the start.
              </h3>
              <p>
                Most AI features fail in the same place. The demo works, then
                nothing around it does. I build the whole thing instead: the
                interface people use, the services behind it, and the model or
                agent doing the actual work. Based in Karachi, working with
                clients wherever they are.
              </p>
              <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  What I Do <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
