import NavBar from "../components/common/NavBar";
import Header from "../components/search/Header";
import RestaurantCard from "../components/search/RestaurantCard";
import SideBar from "../components/search/SideBar";

export default function Search() {
    return (
    <main className='bg-gray-100 min-h-screen w-screen'>
        <main className='max-w-7xl m-auto bg-white text-black'>
          <NavBar/>
          <Header/>
          <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
            <SideBar/>
            <div className='w-5/6'>
              <RestaurantCard/>
            </div>
          </div>
        </main>
    </main>
)
}