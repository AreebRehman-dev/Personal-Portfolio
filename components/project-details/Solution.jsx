import React from 'react';

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">02 . The Solution</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  {/* TODO: Areeb — apne alfaaz me badal lena. */}
                  <p className="fz-18">
                    A single orchestration layer, built on Next.js and FastAPI,
                    that treats each AI task as a step in a pipeline rather than
                    a single call. Steps are defined once, run on a schedule or
                    a trigger, and log what they did, so a workflow that works
                    today still works next month, and anyone on the team can see
                    why when it doesn&apos;t.
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

export default Solution;
