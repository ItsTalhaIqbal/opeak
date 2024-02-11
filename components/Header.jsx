"use client"
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';


function Header() {
  return (
    <Carousel >
      <Carousel.Item>
      <Image
    src="/opeak-slider-2.jpg"
    alt="OPEAK eBike"
    height={670}
    width={1400}
  />
        </Carousel.Item>
     
      <Carousel.Item>
      <Image
    src="/opeak-slider-2.jpg"
    alt="OPEAK eBike"
    height={670}
    width={1400}
  />
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Header;