import RestaurantNavBar from "../../../components/restaurant/RestaurantNavBar";
import Title from "../../../components/restaurant/Title";
import Rating from "../../../components/restaurant/Rating";
import Description from "../../../components/restaurant/Description";
import Images from "../../../components/restaurant/Images";
import Reviews from "../../../components/restaurant/Reviews";
import ReservationCard from "../../../components/restaurant/ReservationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Milestones Grill | OpenTable',
}

export default function RestaurantDetails() {
    return (
      <>
        <div className='bg-white w-[60%] rounded p-3 shadow'>
          <RestaurantNavBar/>
          <Title/>
          <Rating/>
          <Description/>
          <Images/>
          <Reviews/>
        </div>
        <div className='w-[35%] relative text-reg'>
          <ReservationCard/>
        </div>
      </>
    )
}