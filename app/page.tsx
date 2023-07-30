import { Inter } from 'next/font/google'
import Header from '../components/home/Header';
import RestaurantCard from '../components/home/RestaurantCard';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenTable',
}

export default function Home() {
  return (
        <main>
          <Header/>
          <div className='py-3 px-36 mt-10 flex flex-wrap'>
            <RestaurantCard/>
          </div>
        </main>
  )
}
