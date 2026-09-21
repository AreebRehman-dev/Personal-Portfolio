import React from 'react';

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                The stack I build with, <br />
                <span className="opacity-7">end to end.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/stack/react.svg" alt="React" />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">React / Next.js</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/stack/node.svg" alt="Node.js" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">Node / FastAPI</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/stack/n8n.svg" alt="n8n" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">AI Automation</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/stack/nextjs.svg" alt="Next.js" />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">AI Web Apps</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/stack/docker.svg" alt="Docker" />
                </div>
                <span className="value">80%</span>
              </div>
              <h6 className="fz-18">Deployment</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/stack/huggingface.svg" alt="Hugging Face" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">Model Fine Tuning</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
