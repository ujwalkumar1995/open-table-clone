"use client";

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-7xl m-auto bg-white text-black'>
        <nav className='bg-white p-2 flex justify-between'>
          <Link href='' className='font-bold text-grey-700 text-2xl'>OpenTable</Link>
          <div>
            <div className='flex'>
              <button className='mr-3  bg-blue-400 text-white border p-1 px-4 rounded'>
                Signin
              </button>
              <button className='border p-1 px-4 rounded'>Signup</button>
            </div>
          </div>
        </nav>
        <main>
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
          <div className='py-3 px-36 mt-10 flex flex-wrap'>
            <div className='w-64 h-72 m-3 rounded overfow-hidden border cursor-pointer'>
              <Link href='/restaurant/milestones-grill'>
                <img 
                  src='https://resizer.otstatic.com/v2/photos/wide-huge/6/42547915.webp' 
                  alt='' 
                  className='w-full h-36'>
                </img>
                <div className='p-1'>
                  <h3 className='font-bold text-2xl mb-2'>
                    Milestones Grill
                  </h3>
                  <div className='flex items-start'>
                    <div className='flex mb-2'>
                      *****
                    </div>
                    <p className='ml-2'>75 Reviews</p>
                  </div>
                  <div className='flex text-reg font-light capitalize'>
                    <p className='mr-3'>Chinese</p>
                    <p className='mr-3'>₹₹₹₹₹</p>
                    <p>Delhi</p>
                  </div>
                  <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </main> 
    </main>
  )
}
