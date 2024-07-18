"use client"
import { useState } from 'react';
import Image from 'next/image';
import { MdStar } from "react-icons/md";
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {  useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice.jsx';


const ProductAccessories = () => {


  const dispatch=useDispatch()
  const [bike, setBike] = useState("");
  const [quantity, setQuantity] = useState("");
  const [title, setTitle] = useState("Battery");
  const [image, setImage] = useState("/accessories.jpg");

  const handleForm = (e) => {
    e.preventDefault();
    const items={bike,quantity,title,image}
dispatch(addToCart(items))
  
  };

  return (
    <div className="w-auto max-w-[1310px] h-auto ml-auto mr-auto mt-20">
      <Image height={670} width={1310} src="/accessories.jpg" alt='accessories' />
      <div className="max-w-[1310px] bg-white flex flex-col-reverse sm:flex-row">
        <div className="h-full w-full">
          <div className="mt-1 lg:w-auto h-[180px]">
            <h2 className="text-3xl lg:text-7xl ml-5">BATTERY</h2>
            <p className="ml-5 text-lg">Introducing the Opeak eMTB: A high-performance electric mountain bike with front suspension and a hardtail design, ideal for both urban and off-road adventures. Key features include:</p>
          </div>
          <div className="w-full h-auto mb-5">
            <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
              <h5>Enhanced Performance</h5>
            </div>
            <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
              <h5>Optimized Speed and Range</h5>
            </div>
            <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
              <h5>Customizable Riding Experience</h5>
            </div>
            <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
              <h5>Comfort and Utility-Focused Design</h5>
            </div>
            <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
              <h5>Suitable for Various Riders</h5>
            </div>
            <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
              <h5>Versatile Use</h5>
            </div>
          </div>
        </div>
        <div className="h-auto lg:h-full w-full">
          <div className="w-full h-[150px] border border-white">
            <h2 className="ml-[30px] mt-[30px] lg:ml-[100px]"><span className="text-4xl font-bold">$199.00</span></h2>
            <div className="flex ml-[30px] mt-7 lg:ml-[100px]">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <p className="ml-3 text-xs">0 Rating</p>
            </div>
          </div>
          <form onSubmit={handleForm}>
            <div className="h-auto lg:w-full lg:h-[250px] mb-4 mt-3">
              <div className="h-[100px] w-auto ml-3 lg:w-auto lg:ml-5 sm:ml-[100px] flex space-around">
                <div className='h-full w-auto lg:ml-[80px]'>
                  <p>CHOICE OF BIKE</p>
                  <div className="h-[50px] w-[150px] p-0 flex gap-1">
                    <div dir="rtl" className="relative inline-block">
                      <select
                        name="bike"
                        className="rounded-full w-[150px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-11"
                        onChange={(e) => setBike(e.target.value)}
                      >
                        <option value="" disabled select hidden>Select Bike</option>
                        <option value="SuperMoto">SuperMoto</option>
                        <option value="Unik">Unik</option>
                        <option value="Imperial">Imperial</option>
                        <option value="eMTB Full">eMTB Full</option>
                        <option value="eMTB">eMTB</option>
                      </select>
                      <div className="absolute inset-y-0 right-0   pointer-events-none">
                      <div className="h-[27px] w-6 bg-[#9F8F87] rounded-s-full ">
                        <RiArrowDropDownLine className='h-full w-full text-white' />
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
                <div className='h-full w-auto ml-5 '>
                  <p>QTY</p>

                  <div dir="rtl" className="relative inline-block">
                    <select name="qty" className="rounded-full w-[100px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-8"  onChange={(e) => setQuantity(e.target.value)}>
                      <option value="" disabled selected hidden>Quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <div className="absolute inset-y-0 right-0   pointer-events-none">
                      <div className="h-full w-6 bg-[#9F8F87] rounded-s-full ">
                        <RiArrowDropDownLine className='h-full w-full text-white' />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="h-auto w-auto ml-3 lg:w-[450px] flex lg:ml-[100px] gap-2">
                <Link href="https://www.amazon.com/OPEAK-Foldable-Electric-Removable-Battery/dp/B08X39LWB6?th=1&psc=1">
                  <div className='h-[30px] w-[100px] lg:h-[40px] lg:w-[145px] ml-auto rounded-full'>
                    <Image src='/img-amazon.png' height={1050} width={300} className='h-[30px] lg:w-[145px] lg:h-[40px] w-[145px] rounded-full' alt='Amazon' />
                  </div>
                </Link>
                <button className='h-[30px] w-[140px] text-sm lg:w-[145px] lg:h-[40px] order-items rounded-full text-center text-black bg-[#DADDE2] py-1 ' type="submit" onSubmit={handleForm}>ADD TO CART</button>
                <button className='h-[30px] w-[120px] text-sm lg:w-[145px] lg:h-[40px] order-items1 rounded-full text-center font-bold py-1 bg-[#9F8F87] hover:bg-[#9F8F87]' type="submit">BUY NOW</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductAccessories;
