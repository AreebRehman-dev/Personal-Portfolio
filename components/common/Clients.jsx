'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Pehle yahan client/brand logos ka carousel tha. Areeb ke abhi paying clients
// nahi hain, is liye jagah Tech Stack me badal di — developer portfolio pe
// nakli logos se ye kahin zyada kaam ki cheez hai.
const stack = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'FastAPI',
  'Python',
  'LangChain',
  'Vapi',
  'n8n',
  'PyTorch',
  'PostgreSQL',
  'Docker',
];

function Clients() {
  const swiperOptions = {
    speed: 600,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1000: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 40,
        centeredSlides: true,
      },
    },
  };

  return (
    <section className="clients-carso in-circle section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                The tools I reach for <br />
                <span className="opacity-7">on most projects.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="swiper5" data-carousel="swiper">
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
          >
            {stack.map((name) => (
              <SwiperSlide key={name}>
                <div className="item">
                  <div className="stack-chip">{name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              Frontend, backend and the{' '}
              <span className="fw-400">AI layer in between</span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
