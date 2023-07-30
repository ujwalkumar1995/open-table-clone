'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBar = () => {
    const router = useRouter();
    const [location, setLocation] = useState('');
    return (
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
    )
}

export default SearchBar