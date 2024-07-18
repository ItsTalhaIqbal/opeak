"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [property, setProperty] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/product/${id}`);
        setProduct(res.data);
      } catch (error) {
        setError("Error fetching product details");
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const item = {
        product: {
          _id: product._id,
          name: product.name,
          price: product.price,
          images: product.images,
        },
        quantity: parseInt(quantity),
        property
      };
      dispatch(addToCart(item));
      toast.success("Product added to cart");
      router.push('/bikes'); // Navigate to bikes page after adding to cart
    }
  };

  const handleBuy = () => {
    if (product) {
      const item = {
        product: {
          _id: product._id,
          name: product.name,
          price: product.price,
          images: product.images,
        },
        quantity: parseInt(quantity),
        property
      };
      dispatch(addToCart(item));
      router.push('/cart'); // Navigate to cart page after buying
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Flatten the property values
  const propertyValues = product.properties.flatMap((i) => i.value);

  return (
    <div className="w-full min-h-[800px] flex justify-center items-center p-4 bg-gray-100">
      <div className="max-w-[1310px] bg-white p-6 shadow-lg rounded-lg">
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">PRICE : ${product.price}</p>
            <div className="flex gap-5">
              <div className="h-full w-auto ml-5 mb-4">
                <p>Color</p>
                <div dir="rtl" className="relative inline-block">
                  <select
                    name="property"
                    className="rounded-full w-[120px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-8"
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                  >
                    {propertyValues.map((v, index) => (
                      <option value={v} key={index}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pointer-events-none">
                    <div className="h-full w-6 bg-[#9F8F87] rounded-s-full">
                      <RiArrowDropDownLine className="h-full w-full text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-auto ml-5 mb-4">
                <p>QTY</p>
                <div dir="rtl" className="relative inline-block">
                  <select
                    name="qty"
                    className="rounded-full w-[100px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-8"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pointer-events-none">
                    <div className="h-full w-6 bg-[#9F8F87] rounded-s-full">
                      <RiArrowDropDownLine className="h-full w-full text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                className="h-[40px] w-[145px] rounded-full bg-[#9F8F87] hover:bg-[#927466] text-white font-semibold"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              <button
                className="h-[40px] w-[145px] rounded-full bg-[#9F8F87] hover:bg-[#927466] text-white font-semibold"
                onClick={handleBuy}
              >
                BUY NOW
              </button>
              <button className="h-[40px] w-[145px] rounded-full bg-gray-500 hover:bg-gray-600 text-white font-semibold">
                Add to Wish List
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Additional Images</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.images.slice(1).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} image ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
