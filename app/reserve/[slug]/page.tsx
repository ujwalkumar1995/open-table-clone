import { Metadata } from "next"
import Form from "../../../components/reserve/Form"
import Header from "../../../components/reserve/Header"

export const metadata: Metadata = {
    title: 'Reserve at Milestones Grill | OpenTable',
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