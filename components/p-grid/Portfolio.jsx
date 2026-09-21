'use client';
import initIsotope from '@/common/initIsotope';
import projects from '@/data/projects.json';
import React, { useEffect } from 'react';

// Isotope filter class ke liye category ko slug banate hain: "AI SaaS" -> "ai-saas"
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const pad = (n) => String(n).padStart(2, '0');

function Portfolio() {
  useEffect(() => {
    initIsotope();
  }, []);

  // Filter buttons data se bante hain — nayi category add karo, button khud aa jayega.
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">SELECTED WORK</h6>
              <h3>Latest Projects</h3>
            </div>
          </div>
          {/* Ek hi category ho to filter bar bemani hai — tab chhupa dete hain. */}
          {categories.length > 1 && (
            <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
              <div>
                <div className="filter">
                  <span
                    data-filter="*"
                    className="active"
                    data-count={pad(projects.length)}
                  >
                    All
                  </span>
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      data-filter={'.' + slugify(cat)}
                      data-count={pad(
                        projects.filter((p) => p.category === cat).length
                      )}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="gallery row md-marg">
          {projects.map((project) => (
            <div
              key={project.slug}
              className={
                'col-lg-4 col-md-6 items ' + slugify(project.category)
              }
            >
              <div className="item mb-50">
                <div className="img">
                  <img src={project.thumb} alt={project.title} />
                </div>
                <div className="cont d-flex align-items-end mt-30">
                  <div>
                    <span className="p-color mb-5 sub-title">
                      {project.category}
                    </span>
                    <h6>{project.title}</h6>
                  </div>
                  <div className="ml-auto d-flex align-items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={project.title + ' source code'}
                        className="mr-15"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    <a
                      href={project.live || '/project-details'}
                      target={project.live ? '_blank' : undefined}
                      rel={project.live ? 'noreferrer' : undefined}
                      aria-label={project.title}
                    >
                      <span className="ti-arrow-top-right"></span>
                    </a>
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
