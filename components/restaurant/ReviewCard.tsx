import { Review } from '@prisma/client'
import React from 'react'
import Stars from '../common/Stars'

const ReviewCard = ({review}: {review: Review}) => {
  return (
    <div>
        <div className='border-b pb-7 mb-7'>
            <div className='flex'>
            <div className='flex flex-col items-center w-1/6'>
                <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                <h2 className='text-white text-2xl'>{review.first_name[0]}{review.last_name[0]}</h2>
                </div>
                <p className='text-center'>{review.first_name} {review.last_name}</p>
            </div>
            <div className='ml-10 w-5/6'>
                <div className='flex items-center'>
                    <Stars reviews={[review]}/>
                </div>
                <div className='mt-5'>
                <p className='text-lg font-light'>
                    {review.text}
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard