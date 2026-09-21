import React from 'react';

// Areeb ke diye hue address se: society + sector tak, zoom 16.
// Bilkul sahi pin ke liye q= me lat,long daal dein, jaise q=24.9321,67.1453

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Kokan%20Muslim%20Cooperative%20Housing%20Society%2C%20Sector%2020-A%2C%20Gulzar-e-Hijri%2C%20Scheme%2033%2C%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
        title="Karachi, Pakistan"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
