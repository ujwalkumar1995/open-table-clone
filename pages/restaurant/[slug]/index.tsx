import NavBar from "../../components/common/NavBar";
import Header from "../../components/Restaurant/Header";
import RestaurantNavBar from "../../components/Restaurant/RestaurantNavBar";
import Title from "../../components/Restaurant/Title";
import Rating from "../../components/Restaurant/Rating";
import Description from "../../components/Restaurant/Description";
import Images from "../../components/Restaurant/Images";
import Reviews from "../../components/Restaurant/Reviews";
import ReservationCard from "../../components/Restaurant/ReservationCard";

export default function RestaurantDetails() {
    return (
      <main className='bg-gray-100 min-h-screen w-screen'>
          <main className='max-w-7xl m-auto bg-white text-black'>
            <NavBar/>
            <Header/>
            <div className='flex m-auto w-2/3 justify-between items-start-0 -mt-11'>
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
            </div>
          </main>
      </main>
)
}