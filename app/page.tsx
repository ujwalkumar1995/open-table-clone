import { Inter } from 'next/font/google'
import Header from '../components/home/Header';
import RestaurantCard from '../components/home/RestaurantCard';
import { Metadata } from 'next';
import { Cuisine, Location, PRICE, PrismaClient, Review } from '@prisma/client';

const prisma = new PrismaClient()

export interface RestaurantCardType {
  id: number,
  name: string,
  main_image: string,
  cuisine: Cuisine,
  location: Location, 
  price: PRICE,
  slug: string,
  reviews: Review[]
}

const fetchRestaurants = async(): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true, 
      price: true,
      slug: true, 
      reviews: true
    }
  });
  return restaurants;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenTable',
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
        <main>
          <Header/>
          <div className='py-3 pl-52 pr-36 mt-10 flex flex-wrap'>
            {restaurants.map((restaurant: RestaurantCardType) => {
              return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            })}
          </div>
        </main>
  )
}
