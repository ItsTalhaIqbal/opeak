// components/GoogleMap.js
import React from 'react';

const GoogleMap = () => (
  <div className="mapouter mt-3">
    <div className="gmap_canvas">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=madrid,spain&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
      <a href="https://2yu.co">2yu</a>
      <br />
     
    </div>
  </div>
);

export default GoogleMap;
