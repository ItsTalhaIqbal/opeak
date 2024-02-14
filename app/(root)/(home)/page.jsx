import Header from "@/components/Header";
import Accessories from "@/components/Product-components/Accessories";
import EMTB from "@/components/Product-components/EMTB";
import EMTBFull from "@/components/Product-components/EMTBFull";
import Imperial from "@/components/Product-components/Imperial";
import SuperMoto from "@/components/Product-components/SuperMoto";
import Unik from "@/components/Product-components/Unik";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Home = () => {
  return (
    <div className='h-full w-full '>



      <div className="h-auto w-auto max-w-[1310px] ml-auto mr-auto">
        <Header />
        <div className="w-auto max-w-[1310px] h-full ml-auto mr-auto   text-center">
          <h2 className="font-bold text-4xl text-white">INTRODUCING OPEAK'S 2024 EBIKE RANGE:</h2>
          <p className="text-l text-white">Discover our new Mountain eBike series with a full-suspension model for off-road and a front-suspension model for varied terrains.</p>
          <p className="text-l text-white">Also, meet our innovative foldable FAT Bike line, including the compact Supermoto for urban agility and the robust UNIK and Imperial, perfect for all terrains.</p>
        </div>
      </div>

      <div className="w-full h-auto bg-color ">
        <h1 className="pt-4 text-center text-white font-bold text-5xl">Choose your OPEAK eBike</h1>
        <div className="flex ml-auto mr-auto justify-center items-center mt-10 w-auto max-w-[1310px] ">
          {[
      
      { src: '/choose-emtb.jpg', alt: 'Supermoto' , href: <SuperMoto /> },
            { src: '/choose-emtbfull.jpg', alt: 'Imperial' , href: <Unik />},
            { src: '/choose-supermoto.jpg', alt: 'U N I K' , href: <Imperial />},
            { src: '/choose-unik.jpg', alt: 'eMTB FULL' , href: <EMTBFull />},
            { src: '/choose-imperial.jpg', alt: 'eMTB' , href: <Accessories />},
          ].map((item, index) => (
            <Link key={index} href='#' className="w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  ">
              <div className=" flex flex-col items-center">
                <Image src={item.src} height={385} width={281} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
       {/* Products */}
      <SuperMoto />
      <Unik/>
      <Imperial/>
      <EMTBFull/>
      <EMTB/>
      <Accessories/>
    
      <div className="w-full h-auto  bg-white mt-20">
        <div className="h-auto w-auto max-w-[1310px]  ml-auto mr-auto">
          <Image
            src="/opeak-about.jpg"
            alt="About Us"
            height='614'
            width='1310' />
        </div>
        <div className="h-[550px] w-auto max-w-[1310px]  ml-auto mr-auto">
          <h2 className="font-bold text-center mt-3 text-4xl">OPEAK 2024 Electric Bike Range: Key Highlights</h2>
          <div className="h-full w-auto max-w-[1440px]  flex">

            <div className=" h-[490px] w-full">
              <Image src="/opeak-about-1.jpg"
                height={125}
                width={126}
                className="ml-auto mr-auto mt-3" />
              <h2 className="font-bold text-2xl text-center mt-2">Origins in Innovation</h2>
              <div className="w-full h-auto  about-cards">
                <p className="text-start text-lg">Since the early 2000s, Opeak has been at the forefront of bicycle innovation, initially making waves with their titanium/carbon racing bike.</p>
              </div>
            </div>
            <div className=" h-[490px] w-full">
              <Image src="/opeak-about-2.jpg"
                height={125}
                width={126}
                className="ml-auto mr-auto mt-3" />
              <h2 className="font-bold text-2xl text-center mt-2">Dedication to Quality Manufacturing</h2>
              <div className="w-full h-auto  about-cards">
                <p className="text-start text-lg">Over the past two decades, Opeak has focused on crafting top-quality bicycles, primarily offering original equipment manufacturing (OEM) services to other brands.</p>
              </div>
            </div>
            <div className=" h-[490px] w-full">
              <Image src="/opeak-about-3.jpg"
                height={125}
                width={126}
                className="ml-auto mr-auto mt-3" />
              <h2 className="font-bold text-2xl text-center mt-2">Response to E-Bike Demand</h2>
              <div className="w-full h-auto  ">
                <p className="text-start text-lg">With the rising demand for electric bikes, Opeak has expertly utilized its extensive experience to develop e-bikes that are distinguished in the market for their exceptional value.

                </p>
              </div>
            </div>

            <div className=" h-[490px] w-full">
              <Image src="/opeak-about-4.jpg"
                height={125}
                width={126}
                className="ml-auto mr-auto mt-3" />
              <h2 className="font-bold text-2xl text-center mt-2">Varied and High-Performance Product Line</h2>
              <div className="w-full h-auto  ">
                <p className="text-start text-lg">The 2024 range includes both foldable and mountain electric bikes, each acclaimed for delivering remarkable performance at their price point.</p>
              </div>
            </div>

            <div className=" h-[490px] w-full">
              <Image src="/opeak-about-5.jpg"
                height={125}
                width={126}
                className="ml-auto mr-auto mt-3" />
              <h2 className="font-bold text-2xl text-center mt-2">Expert European Design and Craftsmanship</h2>
              <div className="w-full h-auto  ">
                <p className="text-start text-lg">From the beginning, Opeak’s bicycle designs have been meticulously crafted in Europe by a team of deeply passionate and skilled bicycle enthusiasts.</p>
              </div>
            </div>

            <div className=" h-[480px] w-full">
              <Image src="/opeak-about-6.jpg"
                height={125}
                width={126}
                className="ml-auto mr-auto mt-3" />
              <h2 className="font-bold text-2xl text-center mt-2">Customer-Focused Offerings in 2024</h2>
              <div className="w-full h-auto  ">
                <p className="text-start text-lg">As Opeak moves into 2024, the company maintains its steadfast commitment to delivering bicycles that precisely cater to the evolving needs and preferences of their customers.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
