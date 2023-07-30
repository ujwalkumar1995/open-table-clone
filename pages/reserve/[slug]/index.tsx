import Link from "next/link"

export default function Resever(){
    return (
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
            <div className='border-t h-screen'>
                <div className='py-9 w-3/5 m-auto'>
                <div>
                    <h3 className='font-bold'>You&apos;re almost done!</h3>
                    <div className='mt-5 flex'>
                    <img src='https://images.otstatic.com/prod/28353375/2/small.jpg' alt='' className='w-32 h-18 rounder '></img>
                    <div className='ml-4'>
                        <h1 className='text-3xl font-bold'>
                        Aiana Restaurant Collective
                        </h1>
                        <div className='flex mt-3'>
                        <p className='mr-6'>Tues, 22, 2023</p>
                        <p className='mr-6'>7:30 PM</p>
                        <p className='mr-6'>3 People</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='mt-10 flex flex-wrap justify-between w-[660px]'>
                    <input className='border rounded p-3 w-80 mb-4' placeholder='First Name'></input>
                    <input className='border rounded p-3 w-80 mb-4' placeholder='Last Name'></input>
                    <input className='border rounded p-3 w-80 mb-4' placeholder='Phone Number'></input>
                    <input className='border rounded p-3 w-80 mb-4' placeholder='Email'></input>
                    <input className='border rounded p-3 w-80 mb-4' placeholder='Occasion (optional)'></input>
                    <input className='border rounded p-3 w-80 mb-4' placeholder='Requests (optional)'></input>
                    <button className='bg-red-600 w-full p-3 text-white font-bold rounder disabed:bg-gray-300'>
                    Complete Reservation
                    </button>
                    <p className='text-sm'>By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data rates may apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.</p>
                </div>
                </div>
            </div>
            </main>
        </main>
    )
}