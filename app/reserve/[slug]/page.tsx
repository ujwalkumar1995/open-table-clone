import Form from "../../../components/reserve/Form"
import Header from "../../../components/reserve/Header"
import { convertSlugToTitle } from "../../../utilities/convertSlugToTitle"

export async function generateMetadata({ params }: { params: { slug: string } }) {
    return {
        title: `Reserve at ${convertSlugToTitle(params.slug)} | OpenTable`
    }
}

export default function Reserve(){
    return (
        <div className='border-t h-screen'>
            <div className='py-9 w-3/5 m-auto'>
                <Header/>
                <Form/>
            </div>
        </div>
    )
}