import Link from "next/link";

export default function Menu(){
    return(
        <main className='bg-gray-100 min-h-screen w-screen'>
            <main className='max-w-7xl m-auto bg-white text-black'>
            <nav className='bg-white p-2 flex justify-between'>
                <Link href='/' className='font-bold text-grey-700 text-2xl'>OpenTable</Link>
                <div>
                    <div className='flex'>
                        <button className='mr-3  bg-blue-400 text-white border p-1 px-4 rounded'>
                        Signin
                        </button>
                        <button className='border p-1 px-4 rounded'>Signup</button>
                    </div>
                </div>
            </nav>
            <div className='h-96 overflow-hidden'>
                <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
                <h1 className='text-7xl text-white capitalize text-shadow text-center'>Miestones Grill (Delhi)</h1>
                </div>
            </div>
            <div className='flex m-auto w-2/3 justify-between items-start-0 -mt-11'>
                <div className='bg-white w-[100%] rounded p-3 shadow'>
                <nav className='flex text-reg border-b pb-2'>
                    <Link href='/restaurant/milestones-grill' className='mr-7'>
                        Overview
                    </Link>
                    <Link href='/restaurant/milestones-grill/menu' className='mr-7'>
                        Menu
                    </Link>
                </nav>
                <main className='bg-white mt-5'>
                    <div>
                    <div className='mt-4 pb-1 mb-1'>
                        <h1 className='font-bold text-4xl'>Menu</h1>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                        <div className='border rounded p-3 w-[49%] mb-3'>
                        <h3 className='font-bold text-lg'>Surf and Turf</h3>
                        <p className='font-light mt-1 text-sm'>marinated tomato, herbs</p>
                        <p className='mt-7'>₹220</p>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </div>
            </main>
        </main>
    )
}