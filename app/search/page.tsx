import { Metadata } from "next";
import Header from "../../components/search/Header";
import RestaurantCard from "../../components/search/RestaurantCard";
import SideBar from "../../components/search/SideBar";

export const metadata: Metadata = {
  title: 'Search Restaurants | OpenTable',
}

export default function Search() {
    return (
        <>
          <Header/>
          <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
            <SideBar/>
            <div className='w-5/6'>
              <RestaurantCard/>
            </div>
          </div>
        </>
    )
}