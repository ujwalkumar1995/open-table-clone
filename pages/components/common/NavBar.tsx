import Link from "next/link";

const NavBar = () => {
    return (
        <nav className='bg-white p-2 flex justify-between'>
          <Link href='/' className='font-bold text-grey-700 text-2xl'>OpenTable</Link>
          <div>
            <div className='flex'>
              <button className='mr-3 bg-blue-400 text-white border p-1 px-4 rounded'>
                Signin
              </button>
              <button className='border p-1 px-4 rounded'>Signup</button>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;