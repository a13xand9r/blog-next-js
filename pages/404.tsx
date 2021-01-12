import Image from 'next/image'
import { Layout } from '../components/layout'

const Error = () => {
    return <>
        <div className='main'>
            <h1 className='main__center'>Not found</h1>
            <div className='main__center'>
                <Image src='/error.png' width={500} height={500} />
            </div>
        </div>
        {/* <img src={notFoundImg} alt=""/> */}
    </>
}

export default Error