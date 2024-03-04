"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { MdStar } from "react-icons/md";
import Link from 'next/link';
import Button from '../ui/button';


function Unik() {
  const [color, setColor] = useState("")
  const [quantity, setQuantity] = useState("")


  const handleForm=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="w-auto max-w-[1310px] h-auto ml-auto mr-auto mt-20">
      <Carousel interval={null}>
        <Carousel.Item>

          <Image height={670}
            width={1310}
            src="/unik_black.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>

          <Image height={670}
            width={1310}
            src="/unik_white.jpg"
          />


        </Carousel.Item>
      </Carousel>
      <div className="max-w-[1310px] bg-white flex flex-col-reverse sm:flex-row">

<div className="h-full w-full">
  <div className="mt-1 lg:w-auto h-[180px] ">
    <h2 className="text-3xl lg:text-7xl ml-5">UNIK</h2>
    <p className="ml-5 text-lg">Introducing the "UNIK" eBike: A 26-inch fat tire electric bike offering the power and versatility of a moped. Key features include:

</p>
  </div>
  <div className="w-full h-auto mb-5">
    <div className="w-full sm:w-[95%] h-[30px] ml-auto mr-auto order-div">
      <h5>High Performance</h5>
    </div>
    <div className="w-full sm:w-[95%] h-[30px] ml-auto mr-auto order-div">
      <h5>Speed and Range</h5>
    </div>
    <div className="w-full sm:w-[95%] h-[30px] ml-auto mr-auto order-div">
      <h5>Modes of Operation</h5>
    </div>
    <div className="w-full sm:w-[95%] h-[30px] ml-auto mr-auto order-div">
      <h5>Comfort and Convenience</h5>
    </div>
  </div>
</div>
<div className="h-[330px]  lg:h-full w-full">
  <div className="w-full h-[50%] border border-white">
    <h2 className="ml-5 mt-5 text-color3 text-lg sm:ml-[100px] sm:mt-[100px]">As low as: <span className="text-4xl font-bold text-black">$1,099.00</span></h2>
    <div className="flex ml-5 mt-5 sm:ml-[100px] sm:mt-[100px]">
      <MdStar />
      <MdStar />
      <MdStar />
      <MdStar />
      <MdStar />
      <p className="mt-0 ml-3 text-xs">0 Rating</p>
    </div>
  </div>
  <form onClick={handleForm}>
    <div className="h-auto lg:w-full lg:h-[250px] ">
      <div className="h-[100px] w-auto ml-3 lg:w-auto lg:ml-5 sm:ml-[100px] flex space-around">
        <div className='h-full w-auto lg:ml-[80px]'>
          <p>CHOICE OF COLOR</p>
          <div className="h-[50px] w-[150px] p-0 flex gap-1">
            <div className="colors">
              <ul className='flex'>
                <li>
                  <label>
                    <input type="radio" name="color" value="black" onChange={(e) => setColor(e.target.value)} />
                    <span className="swatch" style={{ backgroundColor: "black" }}></span>
                  </label>
                </li>
                
                <li>
                  <label>
                    <input type="radio" name="color" value="white" onChange={(e) => setColor(e.target.value)} />
                    <span className="swatch" style={{ backgroundColor: "white" }}></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='h-full w-auto ml-5 '>
          <p>QTY</p>
          <select name="qty" className="rounded-full w-[100px] h-[25px] quantity" onChange={(e) => setQuantity(e.target.value)}>
            <option className="hidden">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="h-auto w-auto ml-3 lg:w-[450px] flex  lg:ml-[100px] gap-2  ">
        <Link href={'https://www.amazon.com/OPEAK-Foldable-Electric-Removable-Battery/dp/B08X39LWB6?th=1&psc=1'}>
          <div className='h-[30px] w-[100px] lg:h-[40px] lg:w-[145px] ml-auto rounded-full '>
            <Image src={'/img-amazon.png'} height={1050} width={300} className='h-[30px] lg:w-[145px] lg:h-[40px] w-[145px] rounded-full  b' />
          </div>
        </Link>
        <Button className='h-[30px] w-[140px] text-sm lg:w-[145px] lg:h-[40px] order-items rounded-full text-center text-black bg-[#DADDE2] py-1 font-bold-lg ' type="submit">ADD TO CART</Button>
        <Button className='h-[30px] w-[120px] text-sm  lg:w-[145px] lg:h-[40px] order-items1 rounded-full text-center font-bold-sm py-1 bg-[#9F8F87] hover:bg-[#9F8F87] ' type="submit">BUY NOW</Button>
      </div>
    </div>
  </form>
</div>
</div>
    </div>
  );
}

export default Unik;
