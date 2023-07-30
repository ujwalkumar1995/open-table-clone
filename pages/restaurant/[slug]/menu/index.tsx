import NavBar from "../../../components/common/NavBar";
import Header from "../../../components/restaurant/Header";
import RestaurantNavBar from "../../../components/restaurant/RestaurantNavBar";
import Menu from "../../../components/restaurant/menu/Menu";

export default function RestaurantMenu(){
    return(
        <main className='bg-gray-100 min-h-screen w-screen'>
            <main className='max-w-7xl m-auto bg-white text-black'>
                <NavBar/>
                <Header/>
                <div className='flex m-auto w-2/3 justify-between items-start-0 -mt-11'>
                    <div className='bg-white w-[100%] rounded p-3 shadow'>
                        <RestaurantNavBar/>
                        <Menu/>
                    </div>
                </div>
            </main>
        </main>
    )
}