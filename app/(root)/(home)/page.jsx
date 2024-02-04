// import SimpleSlider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className='h-full w-full'>
      {/* Uncomment the following line if SimpleSlider is needed */}
      {/* <SimpleSlider /> */}

      <div className="w-full h-[980px]">
        <div className="">
          <Image
            src="/bg-img.jpg"
            alt="OPEAK eBike"
            height={800}
            width={2800}
            className=" h-[980px] w-full"
          />
        </div>
      </div>

      <div className="w-full h-auto bg-color ">
  <h1 className="pt-4 text-center text-white font-bold text-5xl">Choose your OPEAK eBike</h1>
  <div className="flex flex-wrap justify-center mt-10">
    {[
      { src: '/img-2.png', alt: 'Supermoto' },
      { src: '/img-3.png', alt: 'Imperial' },
      { src: '/img-5.png', alt: 'U N I K' },
      { src: '/img-1.png', alt: 'eMTB FULL' },
      { src: '/img-4.png', alt: 'eMTB' },
    ].map((item, index) => (
      <Link key={index} href='#' className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative">
        <div className="relative">
          <Image src={item.src} height={800} width={2800} className="w-full h-[500px] object-cover" />
          <h2 className="absolute top-[30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold  w-full text-center">{item.alt}</h2>
        </div>
      </Link>
    ))}
  </div>
</div>

    </div>
  );
}

export default Home;
