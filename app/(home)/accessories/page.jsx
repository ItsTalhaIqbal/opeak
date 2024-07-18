"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cartSlice'
import { baseURL } from '@/constants/constant'

const Accessories = () => {
  const [accessories, setAccessories] = useState([])
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleBuy = (item) => {
    if (item) {
      const cartItem = {
        product: {
          _id: item.id,
          name: item.name,
          price: item.price,
          images: item.images,
        },
        quantity: 1, // Assuming quantity is 1 for accessories
        property: 'SuperMoto' // Assuming no specific properties for accessories
      };
      dispatch(addToCart(cartItem));
      router.push('/cart'); // Navigate to cart page after buying
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/product`);
        const data = res.data;

        const filteredAccessories = data
          .filter((p) => p.category === "6692c2d053c366f2a6f75d71") // Make sure the category ID matches
          .map((p) => ({
            id: p._id,
            name: p.name,
            description: p.description,
            price: p.price,
            images: p.images,
            properties: p.properties,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt
          }));
        setAccessories(filteredAccessories);
      } catch (error) {
        setError('Error fetching accessories from the database');
        console.log("Error fetching accessories from db:", error);
      }
    })()
  }, [])

  return (
    <div className="min-h-screen flex-grow bg-white p-4">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <Link href={`/accessories/${item.id}`}>
              <Image
                src={item.images[0]}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <div className='flex'>
                <button 
                  className='h-[30px] w-[120px] text-sm lg:w-[145px] lg:h-[40px] order-items1 rounded-full text-center font-bold-sm py-1 bg-[#9F8F87] hover:bg-[#927466] mx-2' 
                  type="button" 
                  onClick={() => handleBuy(item)}
                >
                  BUY NOW
                </button>
                <button 
                  className='h-[30px] w-[120px] text-sm lg:w-[145px] lg:h-[40px] order-items1 rounded-full text-center font-bold-sm py-1 bg-[#9F8F87] hover:bg-[#927466] mx-2' 
                  type="button"
                >
                  Add To Wish List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accessories
