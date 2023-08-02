import RestaurantNavBar from "../../../components/restaurant/RestaurantNavBar";
import Title from "../../../components/restaurant/Title";
import Rating from "../../../components/restaurant/Rating";
import Description from "../../../components/restaurant/Description";
import Images from "../../../components/restaurant/Images";
import Reviews from "../../../components/restaurant/Reviews";
import ReservationCard from "../../../components/restaurant/ReservationCard";
import { Metadata } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

interface Restaurant {
  id: number,
  name: string,
  images: string[],
  description: string,
  slug: string
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant>  => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true
    }
  })
  if (!restaurant){
    throw new Error();
  }
  return restaurant;
}

export const metadata: Metadata = {
  title: 'Milestones Grill | OpenTable',
}

export default async function RestaurantDetails({params}: {params: {slug: string}}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
    return (
      <>
        <div className='bg-white w-[60%] rounded p-3 shadow'>
          <RestaurantNavBar slug={restaurant.slug}/>
          <Title name={restaurant.name}/>
          <Rating/>
          <Description description={restaurant.description}/>
          <Images images={restaurant.images}/>
          <Reviews/>
        </div>
        <div className='w-[35%] relative text-reg'>
          <ReservationCard/>
        </div>
      </>
    )
}