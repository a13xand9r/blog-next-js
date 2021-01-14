import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from './Header'

export const Layout = ({children}: {children: ReactNode}) => {
    return<>
        <Header/>
        {children}
    </>
}