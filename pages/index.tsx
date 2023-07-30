import { Inter } from 'next/font/google'
import NavBar from './components/common/NavBar';
import Header from './components/home/Header';
import RestaurantCard from './components/home/RestaurantCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-7xl m-auto bg-white text-black'>
        <NavBar/>
        <main>
          <Header/>
          <div className='py-3 px-36 mt-10 flex flex-wrap'>
            <RestaurantCard/>
          </div>
        </main>
      </main> 
    </main>
  )
}
