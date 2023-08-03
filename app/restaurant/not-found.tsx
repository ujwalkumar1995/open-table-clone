'use client'

import React from 'react'
import errorImage from '../../public/icons/error.png'
import Image from 'next/image'

const Error = ({
  error
}: {error: Error}) => {
  return (
    <div className='h-screen bg-gray-200 flex flex-col items-center justify-center'>
        <Image src={errorImage} className='w-56 mb-8' alt=''/>
        <div className='bg-white px-9 py-14 shadow rounded'>
            <h3 className='text-3xl font-bold'>
                Well, this is unfortunate
            </h3>
            <p className='text-reg font-bold'>We couldn&apos;t find the restaurant</p>
            <p className='mt-6 text-sm font-light'>Error Code: 404</p>
        </div>
    </div>
  )
}

export default Error;