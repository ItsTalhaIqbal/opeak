"use client";

import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { decrementQuantity, incrementQuantity, removeFromCart, clearCart } from '@/redux/cartSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { baseURL } from '@/utils/constant';

const CartPage = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
console.log(cart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const increase = (product, color) => {
    dispatch(incrementQuantity({ product, color }));
  };

  const decrease = (product, color) => {
    dispatch(decrementQuantity({ product, color }));
  };

  const remove = (product, color) => {
    dispatch(removeFromCart({ product, color }));
  };

  // Calculate total price
  const shipping = 99;
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0) + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/api/checkout`, {
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
        products: cart, 
      });

      if (response.data.url) {
        window.location = response.data.url;
      }

    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };


    if (window.location.href.includes("success")) {
      dispatch(clearCart());
    }
  

  if (window.location.href.includes("success")) {
    return (
      <div className='w-full bg-white flex flex-col justify-center items-center h-[500px]'>
        <h2>Payment Successful</h2>
        <p>We will send you an email</p>
        <Link href="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className='w-full bg-white'>
      <div className='flex gap-[150px] justify-center min-w-[500px]'>
        <div className='p-8 h-auto w-[500px] mt-9 bg-slate-100 rounded-md mb-9'>
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className='relative p-2 mb-4 bg-white rounded shadow'>
                <button
                  className='absolute top-2 right-2 bg-red-500 text-white rounded-full px-1'
                  onClick={() => remove(item.product, item.color)}
                >
                  &times;
                </button>
                <div className='flex justify-between'>
                  <div className='w-[240px] h-[100px]'>
                    <Carousel interval={null}>
                      {item.product?.images.map((i, idx) => (
                        <Carousel.Item key={idx}>
                          <Image height={70} width={210} src={i} alt={`Product image ${idx}`} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <p className='mt-0'>{item.product?.name}</p>
                  </div>
                  <div className='mt-0 gap-5 h-full w-full'>
                    <div className='flex justify-center gap-3'>
                      <p>${item.product?.price * item.quantity}</p>
                      <p className='font-bold'> <span>{item.property}</span></p>
                    </div>
                    <div className='mx-auto flex justify-center gap-2'>
                      <button className='bg-gray-200 h-8 w-8 rounded-sm' onClick={() => decrease(item.product, item.color)}>-</button>
                      <p className='mt-1'>{item.quantity}</p>
                      <button className='bg-gray-200 h-8 w-8 rounded-sm' onClick={() => increase(item.product, item.color)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='w-full  flex flex-col justify-center items-center h-[500px]'>
            <h2>No items in your Cart</h2>
            <p>CHoose your Favurite bike</p>
            <Link href="/">Continue Shopping</Link>
          </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className='h-auto w-[300px] text-xl mt-9 bg-slate-100 rounded-md mb-9 p-2'>
            <h2>Order Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="form-input block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
                className="form-input block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
                className="form-input block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="form-input block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#9F8F87] hover:bg-[#927466] text-white font-semibold rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className='text-xl mb-4 p-2 lg:mx-[500px] md:mx-0'>
          <h2>Total</h2>
          <p> Shipping Cost : ${shipping}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
