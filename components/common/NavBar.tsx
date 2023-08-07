'use client'

import Link from "next/link";
import AuthModal from "../home/AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../../app/contexts/AuthContext";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
    return (
        <nav className='bg-white p-2 flex justify-between'>
          <Link href='/' className='font-bold text-grey-700 text-2xl'>OpenTable</Link>
          <div>
            {loading ? null : 
            <div className='flex'>
              {
                data ? 
                <button className="bg-blue-400 text-white border mr-3 p-1 px-4 rounded" onClick={signout}>
                  Sign out
                </button> : 
                <>
                  <AuthModal isSignin={true}/>
                  <AuthModal isSignin={false}/>
                </>
              }
            </div>}
            
          </div>
        </nav>
    )
}

export default NavBar;