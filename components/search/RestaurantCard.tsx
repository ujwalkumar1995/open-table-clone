import Link from "next/link";
import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Price from "../common/Price";
import { calulcateReviewRatingsAverage } from "../../utilities/calculateReviewRatingsAverage";

interface Restaurant {
    id: number,
    name: string,
    slug: string,
    price: PRICE,
    main_image: string,
    cuisine: Cuisine,
    location: Location,
    reviews: Review[]
  }

const RestaurantCard = ({restaurant}: {restaurant: Restaurant}) => {
    const renderRatingsText = () => {
        const rating = calulcateReviewRatingsAverage(restaurant.reviews);

        if (rating > 4){
            return 'Awesome'
        }
        else if (rating > 3){
            return 'Good'
        }
        else if (rating > 0) {
            return 'Average'
        }
        else {
            return ''
        }
    }
    return (
        <div className='border-b flex pb-5 ml-4'>
                <img 
                    src={restaurant.main_image} 
                    alt='' 
                    className='w-44 rounded h-36'>
                </img>
                <div className='pl-5'>
                    <h2 className='text-3xl'>{restaurant.name}</h2>
                    <div className='flex items-start'>
                    <div className='flex mb-2'>*****</div>
                    <p className='ml-2 text-sm'>{renderRatingsText()}</p>
                    </div>
                    <div className='mb-9'>
                    <div className="font-light flex text-reg">
                        <Price price={restaurant.price}/>
                        <p className="mr-4 capitalize"> {restaurant.cuisine.name}</p>
                        <p className="mr-4 capitalize"> {restaurant.location.name}</p>
                    </div>
                    </div>
                    <div className='text-red-600'>
                    <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
                    </div>
                </div>
        </div>
    )
}

export default RestaurantCard;