



// const About = ({ isVisible, onClose }) => {
//   const handleClick = (e) => {
//     if (e.target.id === "about") {
//       onClose()
//     }
//   }

//   if (!isVisible) return null;
//   return (

//     <div className='fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm' id="about" onClick={handleClick}>
//       <div className='bg-white rounded-lg  ml-auto mr-auto mt-[150px]  w-[70%] h-auto'>
//         <div className='w-full   flex space-x-auto b'>
//           <h2>Contact Us</h2>
//           <Button onClick={() => onClose(false)} className='button text-black'> X </Button>
//         </div>
        
          
       
//       </div>
//     </div>
//   )
// };




import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function About() {

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Link href="#" onClick={() => setLgShow(true)} className='text-color2 text-lg font-semibold
      '>ABOUT US</Link>
  
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            About
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Intorducing the Supermoto eBike: This 20 inch fat tyre electric bike combines the versatality of a moped with powerful 750W motor and throttle Control .</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default About;