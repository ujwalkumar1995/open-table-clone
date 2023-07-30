import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from './components/common/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
        <main className='max-w-7xl m-auto bg-white text-black'>
          <NavBar/>
          <Component {...pageProps} />
        </main>
    </main>
  )
}
