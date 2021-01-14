import Image from 'next/image'
import { CustomHead } from '../components/CustomHead'

const Error = () => {
    return <>
        <CustomHead title='404 Not Found'/>
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