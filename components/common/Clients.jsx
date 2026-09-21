'use client';
import React from 'react';
import { Autoplay } from 'swiper';
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
  // Mobile-first breakpoints (Swiper me har key "is width se upar" hai).
  // Pehle wale template ke breakpoints ulte the: phone pe 5 circles aur
  // tablet pe sirf 2 aate the.
  const swiperOptions = {
    modules: [Autoplay],
    speed: 800,
    loop: true,
    // Khud chalta rahe. Mouse upar ho to ruk jaye, drag ke baad dobara chale.
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // Loop ke liye copies ki ginti fix. Warna Swiper ise slidesPerView se
    // nikalta hai, jo server (2) aur desktop (5) pe alag hota hai, aur
    // hydration error aata hai.
    loopedSlides: stack.length,
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      576: { slidesPerView: 3, spaceBetween: 20 },
      992: { slidesPerView: 4, spaceBetween: 30 },
      1200: { slidesPerView: 5, spaceBetween: 40 },
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
