import { PrismaClient } from "@prisma/client"
import Form from "../../../components/reserve/Form"
import Header from "../../../components/reserve/Header"
import { convertSlugToTitle } from "../../../utilities/convertSlugToTitle"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: `Reserve at ${convertSlugToTitle(params.slug)} | OpenTable`
    }
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        }
    });

    if (!restaurant){
        notFound();
    }

    return restaurant;
}

export default async function Reserve({params, searchParams}: {
    params: {slug: string},
    searchParams: {date: string, partySize: string}
}){
    const restaurant = await fetchRestaurantBySlug(params.slug);
    return (
        <div className='border-t h-screen'>
            <div className='py-9 w-3/5 m-auto'>
                <Header image={restaurant.main_image} date={searchParams.date} partySize={searchParams.partySize} name={restaurant.name}/>
                <Form/>
            </div>
        </div>
    )
}