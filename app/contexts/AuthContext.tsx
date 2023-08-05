'use client';

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { getCookie } from "cookies-next";

interface User {
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    phone: string,
    email: string
}

interface AuthState extends State {
    setAuthState: Dispatch<SetStateAction<State>>
}

interface State {
    loading: boolean,
    error: string | null,
    data: User | null
}

export const AuthenticationContext = createContext<AuthState>({
    loading: false, 
    data: null,
    error: null,
    setAuthState: () => {}
})

export default function AuthContext({children}: {children: React.ReactNode}) {
    const [authState, setAuthState] = useState<State>({
        loading: true, data: null, error: null
    })

    const fetchUser = async () => {
        setAuthState({
            data: null, error: null, loading: true
        })
        try {
            const jwt = getCookie("jwt");

            if (!jwt){
                return setAuthState({
                        data: null, error: null, loading: false
                    })
            }
            const response = await axios.get('http://localhost:3000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
            setAuthState({
                data: response.data, error: null, loading: false
            });
            
        }
        catch (error: any){
            setAuthState({
                data: null, error: error.response.data.errorMessage, loading: false
            })
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return <AuthenticationContext.Provider value={{...authState, setAuthState}}>
                {children}
           </AuthenticationContext.Provider>
}