'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import projects from '@/data/projects.json';
import React, { useEffect } from 'react';

// Ye page abhi Ovx ki case study hai, is liye 'next' list ka doosra project hai.
const next = projects[1];

function Next() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div
              className="text-left box bg-img"
              data-background="/assets/imgs/works/3/1.jpg"
            >
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">Back To</h6>
                  <a href="/portfolio-grid" className="fz-40 fw-600 stroke">
                    All Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rest">
            <div
              className="text-right d-flex box bg-img"
              data-background="/assets/imgs/works/3/2.jpg"
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Next Project</h6>
                    <a
                      href={next.live || '/portfolio-grid'}
                      target={next.live ? '_blank' : undefined}
                      rel={next.live ? 'noreferrer' : undefined}
                      className="fz-40 fw-600 stroke"
                    >
                      {next.title}
                    </a>
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="/portfolio-grid" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Projects</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
