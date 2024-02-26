"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { MdStar } from "react-icons/md";
import Link from 'next/link';

function Imperial() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    
    <div className="w-auto max-w-[1310px] h-auto ml-auto mr-auto mt-20">
    <Carousel  interval={null}>
      <Carousel.Item>
      
        <Image height={670}
        width={1310}
        src="/imperial_white.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>

      <Image height={670}
        width={1310}
        src="/imperial_black.jpg"
        />
       
       
      </Carousel.Item>
    </Carousel>
    <div className="h-[500px] w-auto max-w-[1310px] bg-white flex">
      <div className="h-full w-full">
        <div className="w-auto h-[200px] mt-10">
          <h2 className="text-7xl ml-5">SUPERMOTO</h2>
          <p className="ml-5 text-lg">Introducing the "Supermoto" eBike: This 20-inch fat tire electric bike combines the versatility of a moped with a powerful 750W motor and throttle control. Key features include:</p>
        </div>
        <div className="w-full h-auto">
          <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
            <h5>High Performance</h5>
          </div>
          <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
            <h5>Speed and Range</h5>
          </div>
          <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
            <h5>Modes of Operation</h5>
          </div>
          <div className="w-[95%] h-[30px] ml-auto mr-auto order-div">
            <h5>Comfort and Convenience</h5>
          </div>
        </div>
      </div>
      <div className="h-ful w-full ">
        <div className="w-full h-[50%] border border-white">
          <h2 className="ml-[100px] mt-[100px]"> <span className="text-color3 text-lg">As low as: </span><span className="text-4xl font-bold ">$999.00</span></h2>
          <div className="flex ml-[100px] mt-11">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="mt-0 ml-3 text-xs">0 Rating</p>
          </div>
        </div>
        <div className="w-full h-[250px] ">
          <div className=" h-[100px] w-auto ml-[100px] flex space-around">
            <div className='h-full w-auto '>
              <p>CHOICE OF COLOR</p>
              <div className=" h-[50px] w-[150px] p-0 flex gap-1">
                <div
                  className={`swatch-option color w-8 h-8 rounded-full b ${selectedColor === "Blue" ? 'selected' : ''}`}
                  style={{ background: "#1857f7 no-repeat center", backgroundSize: "initial" }}
                  onClick={() => handleColorSelect("Blue")}
                ></div>
                <div
                  className={`swatch-option color w-8 h-8 rounded-full b ${selectedColor === "Black" ? 'selected' : ''}`}
                  style={{ background: "black no-repeat center", backgroundSize: "initial" }}
                  onClick={() => handleColorSelect("Black")}
                ></div>
                <div
                  className={`swatch-option color w-8 h-8 rounded-full b ${selectedColor === "Gray" ? 'selected' : ''}`}
                  style={{ background: "gray no-repeat center", backgroundSize: "initial" }}
                  onClick={() => handleColorSelect("Gray")}
                ></div>
              </div>
            </div>
            <div className='h-full w-auto  ml-5'>
              <p>QTY</p>
              <select name="qty" className=" border border-slate-900 rounded-full w-[10s0px] h-[25px]">
                <option value="qty" className="hidden">Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
    
    
    
          </div>
          <div className=" h-auto w-full flex justify-around ">
            <Link href={'https://www.amazon.com/OPEAK-Foldable-Electric-Removable-Battery/dp/B08X39LWB6?th=1&psc=1'} >
              <div className='h-[35px] w-[125px]   rounded-full'><Image src={'/img-amazon.png'} height={1050} width={300} className='h-[35px] w-[125px] rounded-full mb-1' />
              </div>
            </Link>
            <Link href={'#'}><div className='h-[35px] w-[125px]  order-items rounded-full text-center text-black font-bold-lg  py-1'>ADD TO CART</div></Link>
            <Link href={'#'}><div className='h-[35px] w-[125px]  order-items1 rounded-full text-center font-bold-sm py-1'>BUY NOW</div></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Imperial;
