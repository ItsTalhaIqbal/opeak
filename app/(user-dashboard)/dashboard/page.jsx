import { FaShippingFast } from "react-icons/fa";
import { GrDocumentTime } from "react-icons/gr";
import { MdOutlineElectricBike } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";
import { TbFileLike } from "react-icons/tb";




export default function Home() {


  return (

    <main className="h-[600px] w-full ">
    <div className="h-[50%] w-full lg:flex">
      <div className="h-auto w-full flex justify-evenly items-center">
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <FaShippingFast className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center">Fast Shipping</p>
          <p className="text-center text-sm text-[#9F8F87]">Ensure quick delivery and efficient customer service.</p>

        </div>
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <GrDocumentTime  className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center">24/7 Ordering</p>
          <p className="text-center text-sm text-[#9F8F87]"> Allow customers to place orders anytime, anywhere.</p>
        </div>
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <MdOutlineElectricBike  className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center"> Range of Bikes</p>
          <p className="text-center text-sm text-[#9F8F87]">Offer a diverse selection to cater to various preferences and needs.</p>
        </div>
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <LiaCertificateSolid  className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center">Quality Assurance</p>
          <p className="text-center text-sm text-[#9F8F87]"> Assure customers of the high quality and durability of your bikes.</p>
        </div>
      </div>
    </div>
  
    <div className="h-[50%] w-full flex ">
      <div className="h-auto w-full flex justify-evenly ">
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <RiRefund2Fill className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]" />
          <p className="font-semibold text-lg text-[#9F8F87] text-center">Easy Returns</p>
          <p className="text-center text-sm text-[#9F8F87]">Implement a hassle-free return policy to enhance customer satisfaction.</p>
        </div>
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <RiSecurePaymentLine  className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center">Secure Payment </p>
          <p className="text-center text-sm text-[#9F8F87]"> Ensure secure payment methods to build trust.</p>
        </div>
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <MdDiscount  className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center"> Deals & Discounts</p>
          <p className="text-center text-sm text-[#9F8F87]">Offer special discounts and promotions for customers.</p>
        </div>
        <div className="h-[50%] w-[20%] rounded-lg bg-white quantity">
          <TbFileLike  className="h-7 w-7 mx-auto mt-1 text-[#9F8F87]"/>
          <p className="font-semibold text-lg text-[#9F8F87] text-center">Lifetime Warranty</p>
          <p className="text-center text-sm text-[#9F8F87]">Offer a lifetime warranty on certain bike components or frames.</p>
        </div>
      </div>
    </div>
  </main>

  );
}
