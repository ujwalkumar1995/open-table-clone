"use client";

import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
    const router = useRouter();
    const [location, setLocation] = useState('');
    return (
        <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <div className='text-center mt-10'>
              <h1 className='text-white text-5xl fond-bold mb-2'>Find your table for any occasion</h1>
            </div>
            <div className='text-left text-lg py-3 m-auto flex justify-center'>
              <input 
                className='rounded bg-white mr-3 p-2 w-[450px]' placeholder='State, city or town' 
                value={location} 
                onChange={(event) => setLocation(event.target.value)}
                type='text'>
              </input>
              <button className='bg-red-600 px-9 py-2 text-white rounded' onClick={() => {
                if (location === 'Banana'){
                  return ;
                }
                router.push('/search');
              }}>
                Let&apos;s go
              </button>
            </div>
          </div>
    )
}

export default Header;