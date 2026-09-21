'use client';
import React, { useId, useState } from 'react';

// Template ka accordion display:none/block se jhatke se khulta tha, aur khula
// sawal dobara click karne pe band nahi hota tha. Ye version height ko narmi
// se animate karta hai (grid-template-rows 0fr -> 1fr), toggle hota hai, aur
// keyboard/screen reader ke liye button + aria use karta hai.
// Styles: app/globals.css (.acc-*)
function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className="accordion bord acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <div
            key={item.q}
            className={`item acc-item wow fadeInUp${isOpen ? ' is-open' : ''}`}
            data-wow-delay={`.${1 + i * 2}s`}
          >
            <button
              type="button"
              id={btnId}
              className="acc-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="acc-q">{item.q}</span>
              <span className="acc-icon" aria-hidden="true"></span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="acc-panel"
            >
              <div className="acc-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
