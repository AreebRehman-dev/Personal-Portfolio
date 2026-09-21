'use client';
import React, { useState } from 'react';
import social from '@/data/social.json';

// ---------------------------------------------------------------------------
// Web3Forms — free, koi account/password nahi chahiye.
//
// Key lene ka tareeqa (~30 second):
//   1. https://web3forms.com kholein
//   2. areebrehman411@gmail.com daal kar "Create Access Key" dabayein
//   3. Email pe key aayegi — wo neeche paste kar dein (ya .env.local me
//      NEXT_PUBLIC_WEB3FORMS_KEY=... likh dein)
//
// Key set na ho to form toota nahi — wo email client khol deta hai jisme
// message pehle se bhara hota hai. Yaani form kabhi bhi "kuch nahi karta"
// wali halat me nahi jata.
// ---------------------------------------------------------------------------
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
const EMAIL = 'areebrehman411@gmail.com';

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Key nahi hai -> mailto fallback
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(data.subject || 'Portfolio enquiry');
      const body = encodeURIComponent(
        `${data.message}\n\nFrom ${data.name}\n${data.email}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: data.subject || 'New message from your portfolio',
          from_name: 'Portfolio',
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+923154441676">+92 315 444 1676</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>
                  Plot No. B10, Near Kokan Muslim Cooperative Housing Society,
                  Sector 20-A, Gulzar-e-Hijri, Scheme 33, Karachi, Sindh,
                  Pakistan
                </p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>
                  <a href={'mailto:' + EMAIL}>{EMAIL}</a>
                </p>
              </div>

              <div className="social-icon mt-50">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-circle"
                    aria-label={item.name}
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form id="contact-form" className="form2" onSubmit={handleSubmit}>
                <div className="messages">
                  {status === 'sent' && (
                    <p className="main-color">
                      Thanks, your message is through. I usually reply within
                      a day.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="main-color">
                      That didn&apos;t send. Email me directly at{' '}
                      <a href={'mailto:' + EMAIL}>{EMAIL}</a>.
                    </p>
                  )}
                </div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">
                          {status === 'sending'
                            ? 'Sending…'
                            : 'Let‘s Talk'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
