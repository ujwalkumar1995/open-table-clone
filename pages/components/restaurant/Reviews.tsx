const Reviews = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
            What 100 people are saying
        </h1>
            <div>
                <div className='border-b pb-7 mb-7'>
                    <div className='flex'>
                    <div className='flex flex-col items-center w-1/6'>
                        <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                        <h2 className='text-white text-2xl'></h2>MJ
                        </div>
                        <p className='text-center'>Michael Jordan</p>
                    </div>
                    <div className='ml-10 w-5/6'>
                        <div className='flex items-center'>
                        <div className='flex mr-5'>
                            *****
                        </div>
                        </div>
                        <div className='mt-5'>
                        <p className='text-lg font-light'>
                        Liked this resturant for brunch, got an omelet. The sourdough bread was great. The avocado extra was excessive for $4 and didn’t get much avocado. Matcha wasn’t good but loved the iced coffee!
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Reviews