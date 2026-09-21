import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Gulzar-e-Hijri%20Scheme%2033%20Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        title="Karachi, Pakistan"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
