'use client';

import { Dispatch, SetStateAction, createContext, useState } from "react"

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
        loading: false, data: null, error: null
    })
    return <AuthenticationContext.Provider value={{...authState, setAuthState}}>
                {children}
           </AuthenticationContext.Provider>
}