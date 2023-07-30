import Link from "next/link"

const RestaurantCard = () => {
    return (
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
    )
}

export default RestaurantCard;