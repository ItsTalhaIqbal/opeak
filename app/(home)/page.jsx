import Header from '@/components/Header'
import ScrollComponent from '@/components/ScrollComponent'
import FeatureProducts from '@/components/FeatureProducts'
import GoogleMap from '@/components/googleMap'
import Image from 'next/image'
import axios from 'axios'


const HomePage = () => {
  return (
    <>
      <Header />
      <FeatureProducts />

      <div className="w-full h-auto bg-white mt-20">
        <div className="h-auto w-auto max-w-[1310px] ml-auto mr-auto">
          <Image
            src="/opeak-about.jpg"
            alt="About Us"
            height='614'
            width='1310' />
        </div>
        <div className="h-auto w-auto max-w-[1310px]  ml-auto mr-auto ">
          <h2 className="text-lg font-bold text-center mt-3 lg:text-4xl">OPEAK 2024 Electric Bike Range: Key Highlights</h2>
          <div className=" flex flex-col lg:flex-row h-auto w-auto max-w-[1440px] ">

            <div className="flex ">
              <div className=" h-[490px] w-full">
                <Image src="/opeak-about-1.jpg"
                alt="About Us"
                  height={125}
                  width={126}
                  className="ml-auto mr-auto mt-3" />
                <h2 className="font-bold text-lg lg:text-2xl text-center mt-2">Origins in Innovation</h2>
                <div className="w-full h-[224px] mt-10 about-apeak">
                  <p className=" text-sm lg:text-lg text-center">Since the early 2000s, Opeak has been at the forefront of bicycle innovation, initially making waves with their titanium/carbon racing bike.</p>
                </div>
              </div>
              <div className=" h-[490px] w-full">
                <Image src="/opeak-about-2.jpg"
                  height={125}
                  width={126}
                  className="ml-auto mr-auto mt-3" />
                <h2 className="font-bold text-lg lg:text-2xl text-center mt-2">Dedication to Quality Manufacturing</h2>
                <div className="w-full h-[224px] mt-[12px] lg:mt-0  about-apeak">
                  <p className="text-center text-sm lg:text-lg">Over the past two decades, Opeak has focused on crafting top-quality bicycles, primarily offering original equipment manufacturing (OEM) services to other brands.</p>
                </div>
              </div>
              <div className=" h-[490px] w-full">
                <Image src="/opeak-about-3.jpg"
                  height={125}
                  width={126}
                  className="ml-auto mr-auto mt-3" />
                <h2 className="font-bold text-lg lg:text-2xl text-center mt-2">Response to E-Bike Demand</h2>
                <div className="w-full h-[224px] mt-10 about-apeak">
                  <p className="text-center text-sm lg:text-lg">With the rising demand for electric bikes, Opeak has expertly utilized its extensive experience to develop e-bikes that are distinguished in the market for their exceptional value.

                  </p>
                </div>
              </div>
            </div>
            <div className="flex mb-5">
              <div className=" h-[490px] w-full">
                <Image src="/opeak-about-4.jpg"
                  height={125}
                  width={126}
                  className="ml-auto mr-auto mt-3" />
                <h2 className="font-bold text-lg lg:text-2xl text-center mt-2">Varied and High-Performance Product Line</h2>
                <div className="w-full  h-[224px] about-apeak">
                  <p className="text-center text-sm lg:text-lg">The 2024 range includes both foldable and mountain electric bikes, each acclaimed for delivering remarkable performance at their price point.</p>
                </div>
              </div>

              <div className=" h-[490px] w-full">
                <Image src="/opeak-about-5.jpg"
                  height={125}
                  width={126}
                  className="ml-auto mr-auto mt-3" />
                <h2 className="font-bold text-lg lg:text-2xl text-center mt-2">Expert European Design and Craftsmanship</h2>
                <div className="w-full h-[224px] about-apeak">
                  <p className="text-center text-sm lg:text-lg">From the beginning, Opeak’s bicycle designs have been meticulously crafted in Europe by a team of deeply passionate and skilled bicycle enthusiasts.</p>
                </div>
              </div>

              <div className=" h-[480px] w-full">
                <Image src="/opeak-about-6.jpg"
                  height={125}
                  width={126}
                  className="ml-auto mr-auto mt-3" />
                <h2 className="font-bold text-lg lg:text-2xl text-center mt-2">Customer-Focused Offerings in 2024</h2>
                <div className="w-full h-[224px]   lg:mt-10  about-apeak1">
                  <p className="text-center text-sm lg:text-lg">As Opeak moves into 2024, the company maintains its steadfast commitment to delivering bicycles that precisely cater to the evolving needs and preferences of their customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* google map */}
      <div className='h-full w-full layout-bg'>
        <div className='w-auto max-w-[1400px] ml-auto mr-auto'>
          <h2 className='text-center pt-8 font-bold text-white text-2xl lg:text-5xl'>Keep in touch</h2>
          <p className='text-center text-color text-sm lg:text-xl mt-2'>Sign up to get the latest on sales, new releases, and more..</p>
          <div className="flex items-center ml-4 space-x-3 md:flex-row md:justify-center md:space-x-2 mt-3 p-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-[250px] lg:w-[400px] xl:w-[700px] p-2 bg-white border border-gray-300  shadow-sm focus:ring-2 focus:ring-[#9F8F87] focus:outline-none"
            />
            <button
              type="submit"
              className=" md:mt-0 px-6 py-2 b-color text-white bg-[#9F8F87] hover:bg-[#8A7B74] focus:outline-none focus:ring-2 focus:ring-[#9F8F87]"
            >
              SUBMIT
            </button>
          </div>
          <div>
            <h2 className='text-center pt-8 text-color text-2xl lg:text-4xl font-semibold'>CONTACT</h2>
            <GoogleMap />
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage
