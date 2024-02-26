
import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Accessories() {

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Link href="#" onClick={() => setLgShow(true)} className='text-color2 text-lg font-semibold
      '>ACCESSORIES</Link>
  
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Accessories
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Intorducing the Supermoto eBike: This 20 inch fat tyre electric bike combines the versatality of a moped with powerful 750W motor and throttle Control .</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Accessories;