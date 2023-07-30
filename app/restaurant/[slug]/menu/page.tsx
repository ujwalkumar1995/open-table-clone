import { Metadata } from "next";
import RestaurantNavBar from "../../../../components/restaurant/RestaurantNavBar";
import Menu from "../../../../components/restaurant/menu/Menu";

export const metadata: Metadata = {
    title: 'Menu of Milestones Grill | OpenTable',
}

export default function RestaurantMenu(){
    return(
        <div className='bg-white w-[100%] rounded p-3 shadow'>
            <RestaurantNavBar/>
            <Menu/>
        </div>  
    )
}