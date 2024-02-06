import React from 'react'
import { Button } from './ui/button';
import HelpForm from './HelpForm'
import { TfiLocationPin } from "react-icons/tfi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
const Contact = ({ isVisible, onClose }) => {

    const handleClick = (e) => {
        if (e.target.id === "contact") {
            onClose()
        }
    }

    if (!isVisible) return null;
    return (

        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm' id="contact" onClick={handleClick}>

            <div className='bg-color w-[90%] rounded-lg   '>
                <div className='flex justify-end '>
                    <Button onClick={() => onClose(false)} className='button  text-lg'>
                        X
                    </Button>
                </div>
                <div className='h-auto  w-auto flex space-between'>
                    <div className='h-full w-[500px] flex-col flex items-center'>
                        <div className='h-[100px] w-[350px] bg-white mt-11   flex'>
                            <div className='h-full w-[50px] px-2'><TfiLocationPin className='h-11 w-10 mt-4 text-slate-600' /></div>
                            <div className='w-full h-full  px-4 py-2'>
                                <h2 className=''>opeak</h2>
                                <p>United States</p>
                            </div>

                        </div>
                        <div className='h-[100px] w-[350px] bg-white mt-5  flex'>
                            <div className='h-full w-[50px] px-2'><MdEmail className='h-11 w-10 mt-4 text-slate-600' /></div>
                            <div className='w-full h-full  px-4 py-2'>
                                <h2>Contact Us:</h2>
                                <Link href='#' className='text-color2'>rajender.mascot44@gmail.com</Link>
                            </div>



                        </div>
                    </div>

                    <div className='w-[1000px] h-[400px] flex space-x-11 '>

                        <div className=' w-auto h-auto'><HelpForm /> </div>
                        <div className='w-auto h-[300px] flex flex-col '>
                            <div className='b-bottum text-white  h-[300px]'>
                                <h2 className='flex items-center justify-between gap-3 pt-[30px] text-white text-2xl font-semibold'>
                                    ADDRESS <TfiLocationPin />
                                </h2>
                                <p>20550 TOWNSEN Blvd
                                    Bldg, Unit 201
                                    Humbel Texas 77338
                                    United States
                                </p>
                            </div>
                            <div className='b-bottum h-[300px]'>

                                <h2 className='flex items-center justify-between gap-3 pt-[30px] text-white text-2xl font-semibold'>
                                    PHONE <LiaMobileAltSolid />
                                </h2>
                                <p className='text-white'>(888)445-9675</p>
                            </div>
                            <div className='b-bottum h-[300px]'>
                                <h2 className='flex items-center justify-between gap-3 pt-[30px] text-white text-2xl font-semibold'>
                                    EMAIL <MdEmail />
                                </h2>
                                <p className='text-white'>contact@eet.auction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact