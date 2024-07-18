"use client"
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';


function Header() {
  return (
    <div className="w-auto max-w-[1310px] h-auto mx-auto mt-10">
    <div className="realative z-50">
      <Carousel >
        <Carousel.Item>
          <Image
            src="/opeak-slider-2.jpg"
            alt="OPEAK eBike"
            height={670}
            width={1400}
            className='relative'
            style={{ width: "auto", height: "auto" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
          priority
            src="/opeak-slider-2.jpg"
            alt="OPEAK eBike"
            height={670}
            width={1400}
            className='relative'
            style={{ width: "auto", height: "auto" }}
          />
        </Carousel.Item>
      </Carousel>

      <div className="w-auto max-w-[1310px] h-full ml-auto mr-auto text-center">
        <h2 className=" text-xl font-bold lg:text-4xl text-white">INTRODUCING OPEAK'S 2024 EBIKE RANGE:</h2>
        <p className="text-l text-white">Discover our new Mountain eBike series with a full-suspension model for off-road and a front-suspension model for varied terrains.</p>
        <p className="text-l text-white mt-0">Also, meet our innovative foldable FAT Bike line, including the compact Supermoto for urban agility and the robust UNIK and Imperial, perfect for all terrains.</p>
      </div>
    </div>
    </div>
  );
}

export default Header;