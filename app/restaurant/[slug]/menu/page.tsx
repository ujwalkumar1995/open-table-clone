import RestaurantNavBar from "../../../../components/restaurant/RestaurantNavBar";
import Menu from "../../../../components/restaurant/menu/Menu";
import { PrismaClient } from "@prisma/client";
import { convertSlugToTitle } from "../../../../utilities/convertSlugToTitle";

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

export async function generateMetadata({ params }: { params: { slug: string } }) {
console.log(params);
    return {
        title: `Menu of ${convertSlugToTitle(params.slug)} | OpenTable`
    }
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