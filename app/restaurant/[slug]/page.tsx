import RestaurantNavBar from "../../../components/restaurant/RestaurantNavBar";
import Title from "../../../components/restaurant/Title";
import Rating from "../../../components/restaurant/Rating";
import Description from "../../../components/restaurant/Description";
import Images from "../../../components/restaurant/Images";
import Reviews from "../../../components/restaurant/Reviews";
import ReservationCard from "../../../components/restaurant/ReservationCard";
import { Metadata } from "next";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import { convertSlugToTitle } from "../../../utilities/convertSlugToTitle";

const prisma = new PrismaClient;

interface Restaurant {
  id: number,
  name: string,
  images: string[],
  description: string,
  slug: string,
  reviews: Review[],
  open_time: string,
  close_time: string
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
      slug: true,
      reviews: true,
      open_time: true,
      close_time: true
    }
  })
  if (!restaurant){
    notFound();
  }
  return restaurant;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: `${convertSlugToTitle(params.slug)} | OpenTable`
	}
}

export default async function RestaurantDetails({params}: {params: {slug: string}}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
    return (
      <>
        <div className='bg-white w-[60%] rounded p-3 shadow'>
          <RestaurantNavBar slug={restaurant.slug}/>
          <Title name={restaurant.name}/>
          <Rating reviews={restaurant.reviews}/>
          <Description description={restaurant.description}/>
          <Images images={restaurant.images}/>
          <Reviews reviews={restaurant.reviews}/>
        </div>
        <div className='w-[35%] text-reg'>
          <ReservationCard openTime={restaurant.open_time} closeTime={restaurant.close_time} slug={restaurant.slug}/>
        </div>
      </>
    )
}