import NavBar from "../../components/common/NavBar"
import Form from "../../components/reserve/Form"
import Header from "../../components/reserve/Header"

export default function Reserve(){
    return (
        <main className='bg-gray-100 min-h-screen w-screen'>
            <main className='max-w-7xl m-auto bg-white text-black'>
                <NavBar/>
                <div className='border-t h-screen'>
                    <div className='py-9 w-3/5 m-auto'>
                        <Header/>
                        <Form/>
                    </div>
                </div>
            </main>
        </main>
    )
}