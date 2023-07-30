import '../styles/globals.css'
import NavBar from './components/common/NavBar'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <main className='bg-gray-100 min-h-screen w-screen'>
          <main className='max-w-7xl m-auto bg-white text-black'>
          <NavBar/>
            {children}
          </main>
          </main>
        </body>
      </html>
    )
  }