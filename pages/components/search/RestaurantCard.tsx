import Link from "next/link";

const RestaurantCard = () => {
    return (
        <div className='border-b flex pb-5'>
                <img 
                    src='https://images.otstatic.com/prod/28353375/2/small.jpg' 
                    alt='' 
                    className='w-44 rounded'>
                </img>
                <div className='pl-5'>
                    <h2 className='text-3xl'>Marco Polo at Silver Lake Pool & Inn</h2>
                    <div className='flex items-start'>
                    <div className='flex mb-2'>*****</div>
                    <p className='ml-2 text-sm'>Awesome</p>
                    </div>
                    <div className='mb-9'>
                    <div className="font-light flex text-reg">
                        <p className="mr-4">₹₹₹</p>
                        <p className="mr-4"> Italian</p>
                        <p className="mr-4"> Delhi</p>
                    </div>
                    </div>
                    <div className='text-red-600'>
                    <Link href='/restaurant/milestones-grill'>View more information</Link>
                    </div>
                </div>
        </div>
    )
}

export default RestaurantCard;