import Form from "../../components/reserve/Form"
import Header from "../../components/reserve/Header"

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