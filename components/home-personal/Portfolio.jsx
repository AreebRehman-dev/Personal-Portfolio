'use client';
import projects from '@/data/projects.json';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My Work</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <div className="card-item sub-bg" key={project.slug}>
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        {project.tags.map((tag) => (
                          <a href="/portfolio-grid" className="tag" key={tag}>
                            {tag}
                          </a>
                        ))}
                      </div>
                      <h4>{project.title}</h4>
                      {project.subtitle && (
                        <h6 className="p-color fw-400 mt-10">
                          {project.subtitle}
                        </h6>
                      )}
                    </div>
                    <div>
                      <p>{project.desc}</p>
                      <a
                        href={project.live || '/portfolio-grid'}
                        target={project.live ? '_blank' : undefined}
                        rel={project.live ? 'noreferrer' : undefined}
                        className="underline mt-15"
                      >
                        <span className="text main-color sub-title">
                          {project.live ? 'Visit Site' : 'View Project'}{' '}
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src={project.img} alt={project.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
