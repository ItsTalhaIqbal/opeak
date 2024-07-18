// components/GoogleMap.js
import Link from 'next/link';
import React from 'react';

const GoogleMap = () => (
  <div  className="mapouter w-auto max-w-[1310px]  mx-auto ">
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
      <Link href="https://2yu.co">2yu</Link>
      <br />
     
    </div>
  </div>
);

export default GoogleMap;
