import { Metadata } from "next";
import Header from "../../components/search/Header";
import RestaurantCard from "../../components/search/RestaurantCard";
import SideBar from "../../components/search/SideBar";
import { PRICE, PrismaClient } from "@prisma/client";
import { SearchParams } from "../../components/search/SideBar";

const prisma = new PrismaClient();
export const metadata: Metadata = {
  title: 'Search Restaurants | OpenTable',
}

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city){
    const location = {
        name: {
          equals: searchParams.city.toLowerCase()
        }
    }
    where.location = location;
  }

  if (searchParams.cuisine){
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine = cuisine;
  }

  if (searchParams.price){
    const price = {
        equals: searchParams.price
    }
    where.price = price;
  }
  const selectFields = {
    id: true,
    name: true,
    slug: true,
    price: true,
    main_image: true,
    cuisine: true,
    location: true,
    reviews: true
  }

  return prisma.restaurant.findMany({
    where,
    select: selectFields
  })
}


const fetchLocations = () => {
  return prisma.location.findMany();
}

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
}

export default async function Search({searchParams}: {searchParams: {city?: string, cuisine?: string, price?: PRICE}}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

    return (
        <>
          <Header/>
          <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
            <SideBar locations={locations} cuisines={cuisines} searchParams={searchParams}/>
            <div className='w-5/6'>
              {restaurants.length  ? (
              restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)) : 
              <p>Sorry, we not found no restaurants in this area</p>}
            </div>
          </div>
        </>
    )
}