import Link from "next/link";

export default function Search() {
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
          <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <div className='text-left text-lg py-3 m-auto flex justify-center'>
              <input className='rounded bg-white mr-3 p-2 w-[450px]' placeholder='State, city or town' type='text'></input>
              <button className='bg-red-600 px-9 py-2 text-white rounded'>Let&apos;s go</button>
            </div>
          </div>
          <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
            <div className='w-1/5'>
              <div className='border-b pb-4'>
                <h1 className='mb-2'>Region</h1>
                <p className='font-light text-reg'>Delhi</p>
                <p className='font-light text-reg'>Agra</p>
                <p className='font-light text-reg'>Chandigarh</p>
                <p className='font-light text-reg'>Chennai</p>
                <p className='font-light text-reg'>Mumbai</p>
                <p className='font-light text-reg'>Kolkata</p>
              </div>
              <div className='border-b pb-4 mt-3'>
                <h1 className='mb-2'>Cuisine</h1>
                <p className='font-light text-reg'>Italian</p>
                <p className='font-light text-reg'>Mughlai</p>
                <p className='font-light text-reg'>Chinese</p>
              </div>
              <div className='mt-3 pb-4'>
                <h1 className='mb-2'></h1>
                <div className='flex'>
                  <button className='border w-full text-reg font-light rounded-l p-2'>
                    ₹
                  </button>
                  <button className='border-r border-t border-b w-full text-reg font-light p-2'>
                    ₹₹
                  </button>
                  <button className='border-r border-t border-b w-full text-reg  rounded-r font-light p-2'>
                    ₹₹₹
                  </button>
                </div>
              </div>
            </div>
            <div className='w-5/6'>
              <div className='border-b flex pb-5'>
                <img 
                  src='https://images.otstatic.com/prod/28353375/2/small.jpg' 
                  alt='' 
                  className='w-44 rounded'>
                </img>
                <div className='pl-5'>
                  <h2 className='text-3xl'>Marco Polo at Silver Lake Pool & Inn</h2>
                  <div className='flex items-start'>
                    <div className='flex mb-2'>*****</div>
                    <p className='ml-2 text-sm'>Awesome</p>
                  </div>
                  <div className='mb-9'>
                    <div className="font-light flex text-reg">
                      <p className="mr-4">₹₹₹</p>
                      <p className="mr-4"> Italian</p>
                      <p className="mr-4"> Delhi</p>
                    </div>
                  </div>
                  <div className='text-red-600'>
                    <a href=''>View more information</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </main>
)
}