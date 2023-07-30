import Link from "next/link";

export default function RestaurantDetails() {
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
            <div className='h-96 overflow-hidden'>
              <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
                <h1 className='text-7xl text-white capitalize text-shadow text-center'>Miestones Grill (Delhi)</h1>
              </div>
            </div>
            <div className='flex m-auto w-2/3 justify-between items-start-0 -mt-11'>
              <div className='bg-white w-[60%] rounded p-3 shadow'>
                <nav className='flex text-reg border-b pb-2'>
                  <Link href='/restaurant/milestones-grill' className='mr-7'>
                    Overview
                  </Link>
                  <Link href='/restaurant/milestones-grill/menu' className='mr-7'>
                    Menu
                  </Link>
                </nav>
                <div className='mt-4 border-b pb-6'>
                  <h1 className='font-bold text-6xl'>Milestones Grill</h1>
                </div>
                <div className='flex items-end'>
                  <div className='ratings mt-2 flex items-center'>
                    <p>*****</p>
                    <p className='text-reg ml-3'>4.9</p>
                  </div>
                  <div>
                    <p className='text-reg ml-4'>
                      600 Reviews
                    </p>
                  </div>
                </div>
                <div className='mt-4'>
                    <p className='text-lg-font-light'>
                    A mainstay for DTLA professionals, locals and tourists alike - Cafe Fig is an everyday gathering place for all. Our culinary team uses classic quintessential recipes infused with unique, natural ingredients, to reimagine iconic dishes with Mediterranean, Southwest, and Continental influences. Chef Joana Cruz executes breakfast, lunch and dinner fare flawlessly, consisting mainly of locally-sourced ingredients. Which feature fresh, organic, and sustainable products, along with vegan and gluten free options. Equally important to our food offerings is an elevated coffee and tea program featuring a focus on healthy alternatives with unparalleled ingredients.
                    </p>
                </div>
                <div>
                  <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
                    7 photos
                  </h1>
                  <div className='flex flex-wrap'>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/5/26455600.webp' alt='' className='w-56 h-44 mr-1'></img>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/6/42547904.webp' alt='' className='w-56 h-44 mr-1'></img>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/5/42547913.webp' alt='' className='w-56 h-44 mr-1'></img>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/2/42514824.webp' alt='' className='w-56 h-44 mr-1'></img>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/2/42514827.webp' alt='' className='w-56 h-44 mr-1'></img>
                  </div>
                </div>
                <div>
                  <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
                    What 100 people are saying
                  </h1>
                  <div>
                    <div className='border-b pb-7 mb-7'>
                      <div className='flex'>
                        <div className='flex flex-col items-center w-1/6'>
                          <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                            <h2 className='text-white text-2xl'></h2>MJ
                          </div>
                          <p className='text-center'>Michael Jordan</p>
                        </div>
                        <div className='ml-10 w-5/6'>
                          <div className='flex items-center'>
                            <div className='flex mr-5'>
                              *****
                            </div>
                          </div>
                          <div className='mt-5'>
                            <p className='text-lg font-light'>
                            Liked this resturant for brunch, got an omelet. The sourdough bread was great. The avocado extra was excessive for $4 and didn’t get much avocado. Matcha wasn’t good but loved the iced coffee!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[35%] relative text-reg'>
                <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
                  <div className='text-center border-b pb-2 font-bold'>
                    <h4 className='text-lg'>
                      Make a reservation
                    </h4>
                  </div>
                  <div className='my-3 flex flex-col'>
                    <label htmlFor=''>Party size</label>
                    <select name='' className='py-3 border-b font-light' id=''>
                      <option value=''>1 person</option>
                      <option value=''>2 person</option>
                      </select>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex flex-col w-[40%]'>
                      <label htmlFor=''>
                        Date
                      </label>
                      <input type='text' className='py-3 border-b font-light w-28'></input>
                    </div>
                    <div className='flex flex-col w-[40%]'>
                      <label htmlFor=''>
                        Time
                      </label>
                      <select name='' id='' className='py-3 border-b font-light'>
                        <option value=''>7:30 AM</option>
                        <option value=''>9:30 AM</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>Find a Time</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
      </main>
)
}