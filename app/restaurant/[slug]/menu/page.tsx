import { Metadata } from "next";
import RestaurantNavBar from "../../../../components/restaurant/RestaurantNavBar";
import Menu from "../../../../components/restaurant/menu/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchItems = async (slug: string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select:{
            items: true
        }
    })

    if (!restaurant){
        throw new Error();
    }

    return restaurant;
}

export const metadata: Metadata = {
    title: 'Menu of Milestones Grill | OpenTable',
}

export default async function RestaurantMenu({params}: {params: {slug: string}}){
    const menu = await fetchItems(params.slug);
    return(
        <div className='bg-white w-[100%] rounded p-3 shadow'>
            <RestaurantNavBar slug={params.slug}/>
            <Menu menu={menu.items}/>
        </div>  
    )
}