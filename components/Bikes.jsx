"use client"

import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Bikes() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Link href="#" onClick={() => setLgShow(true)} className='text-color2 text-sm md:text-base lg:text-lg lg:font-semibold'>
        BIKES
      </Link>
  
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            BIKES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Introducing the Supermoto eBike: This 20 inch fat tyre electric bike combines the versatility of a moped with a powerful 750W motor and throttle control.</p>
          <Link href={'/bikes'} onClick={() => setLgShow(false)}>Bikes</Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Bikes;
