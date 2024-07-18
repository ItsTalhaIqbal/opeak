"use client"

import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import HelpForm from './ContactForm';
import ContactForm from './ContactForm';

function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Link href="#" onClick={handleShow} className='text-color2 text-sm md:text-base lg:text-lg lg:font-semibold'>CONTACT</Link>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="modal-custom-xl"
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='h-auto flex flex-col lg:flex-row w-auto max-w-[1400px] mt-3 ml-auto mr-auto bg-color'>
                        <div className='w-full flex h-auto'>
                            <ContactForm />
                        </div>
                        <div className='w-full h-[300px] flex mt-3 '>
                            <div className='h-auto w-auto ml-5 lg:ml-[100px]  '>
                                <h2 className='flex items-center justify-between   text-white text-xl lg:text-3xl font-semibold'>
                                    ADDRESS
                                </h2>
                                <div className=' text-white text-lg lg:text-xl  h-[70px] w-[350px]  text-center b-bottum'>
                                    <p>20550 TOWNSEN Blvd
                                        Bldg, Unit 201
                                        Humbel Texas 77338
                                        United States
                                    </p>
                                </div>
                                <h2 className='flex items-center justify-between   text-white text-xl lg:text-3xl font-semibold'>
                                    PHONE
                                </h2>
                                <div className=' h-[50px] w-[350px] text-center  text-xl b-bottum'>
                                    <p className='text-white'>(888)445-9675</p>
                                </div>
                                <h2 className='flex items-center justify-between   text-white text-xl lg:text-3xl font-semibold'>
                                    EMAIL
                                </h2>
                                <div className=' h-[50px] w-[350px] text-center  text-xl b-bottum'>
                                    <p className='text-white'>contact@eet.auction</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Contact;
