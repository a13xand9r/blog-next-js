import { ReactNode } from 'react'
import { Header } from './Header'
import Image from 'next/image'

export const Layout = ({children}: {children: ReactNode}) => {
    
    return<>
        <Header/>
        {children}
        <div className='bin'>
            <Image src="/bin.webp" alt="bin" layout="fill" />
        </div>
    </>
}