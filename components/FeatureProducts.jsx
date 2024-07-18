"use client";
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import axios from 'axios';
import ScrollComponent from './ScrollComponent';
import { toast } from 'react-toastify';

const FeatureProducts = () => {
  const [bikes, setBikes] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const dispatch = useDispatch();
  const [property, setProperty] = useState("");
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/feature');
        const data = res.data;
        // Filter the data first and then map over the filtered results
        const bike = data
          .filter((p) => p.product.category === "6692c2c353c366f2a6f75d6f")
          .map((p) => ({
            id: p.product._id,
            name: p.product.name,
            description: p.product.description,
            price: p.product.price,
            images: p.product.images,
            properties: p.product.properties,
            createdAt: p.product.createdAt,
            updatedAt: p.product.updatedAt
          }));
        setBikes(bike);
        const featureAccessories = data
          .filter((p) => p.product.category === "6692c2d053c366f2a6f75d71")
          .map((p) => ({
            id: p.product._id,
            name: p.product.name,
            description: p.product.description,
            price: p.product.price,
            images: p.product.images,
            properties: p.product.properties,
            createdAt: p.product.createdAt,
            updatedAt: p.product.updatedAt
          }));
        setAccessories(featureAccessories);
      } catch (error) {
        console.error('Error fetching data:', error);
        setBikes([]);
        setAccessories([]);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    if (!property) {
      toast.error("please select the color Or bike")
    }
   
    const item = { product, property, quantity: parseInt(quantity) };
    console.log("item data",item);
    dispatch(addToCart(item));
    setProperty("");
    setQuantity("1");
    toast.success("Item added to cart");
  };

  
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <>
      <ScrollComponent />

      {bikes.map((b) => (
        <div key={b.id} className="w-auto max-w-[1310px] h-auto ml-auto mr-auto mt-20 mb-[100px]">
          <Carousel interval={null}>
            {b.images.map((i, index) => (
              <Carousel.Item key={index}>
                <Image height={670} width={1310} src={i} alt={i} layout="responsive" objectFit="cover" />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="max-w-[1310px] bg-white flex flex-col-reverse sm:flex-row">
            <div className="h-full w-full">
              <div className="mt-1 lg:w-auto h-[180px]">
                <h2 className="text-3xl lg:text-7xl ml-5">{b.name}</h2>
                <p className="ml-5 text-lg">{b.description}</p>
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
            <div className="h-[330px] lg:h-full w-full">
              <div className="w-full h-[50%] border border-white">
                <h2 className="ml-5 mt-5 text-color3 text-lg sm:ml-[100px] sm:mt-[100px]">
                  As low as: <span className="text-4xl font-bold">${b.price}.00</span>
                </h2>
                <div className="flex ml-5 mt-5 sm:ml-[100px] sm:mt-[100px]">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <p className="mt-0 ml-3 text-xs">0 Rating</p>
                </div>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(b); }}>
                <div className="h-auto lg:w-full lg:h-[250px]">
                  <div className="w-auto ml-3 lg:w-auto lg:ml-5 flex">
                    <div className="h-full w-auto lg:ml-[80px]">
                      <p>CHOICE OF COLOR</p>
                      <div className="h-[50px] w-[150px] p-0 flex gap-1">
                        <ul className="flex gap-3">
                          {b.properties.map((c) =>
                            c.value.map((value) => (
                              <span key={value} className="swatch">
                                <label>
                                  <input
                                    type="radio"
                                    name="color"
                                    value={value}
                                    checked={property === value}
                                    onChange={() => setProperty(value)}
                                    className="hidden"
                                  />
                                  <span
                                    className={`block w-7 h-7 rounded-full ${property === value ? "ring-2 ring-offset-2 ring-gray-500" : ""}`}
                                    style={{ backgroundColor: value }}
                                  ></span>
                                </label>
                              </span>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="h-full w-auto ml-[50px]">
                      <p>QTY</p>
                      <div dir="rtl" className="relative inline-block">
                        <select
                          name="qty"
                          className="rounded-full w-[100px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-8"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(e.target.value)}
                        >
                          <option value="" disabled>Quantity</option>
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
                  <div className="h-auto w-auto ml-3 lg:w-[450px] flex lg:ml-[100px] gap-2">
                    <Link href={'https://www.amazon.com/OPEAK-Foldable-Electric-Removable-Battery/dp/B08X39LWB6?th=1&psc=1'}>
                      <div className="h-[30px] w-[100px] lg:h-[40px] lg:w-[145px] ml-auto rounded-full">
                        <Image src={'/img-amazon.png'} height={1050} width={300} className="h-[30px] lg:w-[145px] lg:h-[40px] w-[145px] rounded-full" />
                      </div>
                    </Link>
                    <button className="h-[30px] w-[140px] text-sm lg:w-[145px] lg:h-[40px] order-items rounded-full text-center text-black bg-[#D9D9D9]" type="submit">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
      {accessories.map((a) => (
  <div key={a.id} className="w-auto max-w-[1310px] h-auto ml-auto mr-auto mt-20 mb-[100px]">
    <Carousel interval={null}>
      {a.images.map((i, index) => (
        <Carousel.Item key={index}>
          <Image height={670} width={1310} src={i} alt={i} layout="responsive" objectFit="cover" />
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="max-w-[1310px] bg-white flex flex-col-reverse sm:flex-row">
      <div className="h-full w-full">
        <div className="mt-1 lg:w-auto h-[180px]">
          <h2 className="text-3xl lg:text-7xl ml-5">{a.name}</h2>
          <p className="ml-5 text-lg">{a.description}</p>
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
      <div className="h-[330px] lg:h-full w-full">
        <div className="w-full h-[50%] border border-white">
          <h2 className="ml-5 mt-5 text-color3 text-lg sm:ml-[100px] sm:mt-[100px]">
            As low as: <span className="text-4xl font-bold">${a.price}.00</span>
          </h2>
          <div className="flex ml-5 mt-5 sm:ml-[100px] sm:mt-[100px]">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="mt-0 ml-3 text-xs">0 Rating</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(a); }}>
          <div className="h-auto lg:w-full lg:h-[250px]">
            <div className="w-auto ml-3 lg:w-auto lg:ml-5 flex">
              <div className="h-full w-auto lg:ml-[80px]">
                <p>CHOICE OF COLOR</p>
                <div dir="rtl" className="relative inline-block">
                  <select
                    name="color"
                    className="rounded-full w-[120px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-8"
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                  >
                    {a.properties.map((c, index) =>
                      c.value.map((value) => (
                        <option key={`${index}-${value}`} value={value}>{value}</option>
                      ))
                    )}
                  </select>
                  <div className="absolute inset-y-0 right-0 pointer-events-none">
                    <div className="h-full w-6 bg-[#9F8F87] rounded-s-full">
                      <RiArrowDropDownLine className="h-full w-full text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-auto ml-[50px]">
                <p>QTY</p>
                <div dir="rtl" className="relative inline-block">
                  <select
                    name="qty"
                    className="rounded-full w-[100px] h-[27px] appearance-none border-2 border-[#9F8F87] pr-8"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                  >
                    <option value="" disabled>Quantity</option>
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
            <div className="h-auto mt-7 w-auto ml-3 lg:w-[450px] flex lg:ml-[100px] gap-2">
            <Link href={'https://www.amazon.com/OPEAK-Foldable-Electric-Removable-Battery/dp/B08X39LWB6?th=1&psc=1'}>
                      <div className="h-[30px] w-[100px] lg:h-[40px] lg:w-[145px] ml-auto rounded-full">
                        <Image src={'/img-amazon.png'} height={1050} width={300} className="h-[30px] lg:w-[145px] lg:h-[40px] w-[145px] rounded-full" />
                      </div>
                    </Link>
              <button className="h-[30px] w-[140px] lg:w-[145px] lg:h-[40px] order-items rounded-full text-center text-black bg-[#D9D9D9] hover:bg-[#BEBEBE] focus:outline-none" type="submit">
                ADD TO CART
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
))}

    </>
  );
};

export default FeatureProducts;
