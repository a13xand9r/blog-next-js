import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { UserType } from '../mockDataBase'
import { CustomHead } from './CustomHead'

type PropsType = {
    userInfo: UserType | null
    page: 'PROFILE' | 'USER'
}

const UserPage = ({ userInfo, page }: PropsType) => {
    const [user, setUser] = useState<null | UserType>(userInfo)
    useEffect(() => {
        let load = async () => {
            let res: Response
            res = page === 'USER'
                ? await fetch(`http://localhost:3000/api/user?id=${router.query.userId}`)
                : await fetch(`http://localhost:3000/api/profile`)
            const data = await res.json()
            setUser({ name: data.name, id: data.id, photo: data.photo, posts: data.posts })
        }
        if (!userInfo) load()
        userInfo && userInfo.status === 'ERROR' && router.push('/error')
    }, [])
    const router = useRouter()
    const goToPost = (id: string) => {
        router.push(`/posts/${id}`)
    }
    if (!user) {
        return <main className='main'>Loading...</main>
    }
    return (
        <>
            <CustomHead title={user.name} keywords='user page'/>
            <main className='main'>
                <div className='main__userInfo'>
                    <h2 className='main__userName'>{user.name}</h2>
                    <img className='main__userPhoto' src={user.photo} alt="" />
                </div>
                {user.posts ? user.posts.map(p => <div onClick={goToPost.bind(null, p.id)} className='main__item blockItem' key={p.id}>
                    <h4>{p.title}</h4>
                    <div className='blockItem__date'>{p.date}</div>
                </div>) : <h3 className='main__center'>У {page === 'USER' ? 'пользователя' : 'Вас'} пока нет постов</h3>}
            </main>
        </>
    )
}

export const userInfoServerRequest = (page: 'USER' | 'PROFILE'): Function => {
    return async ({ req, query }) => {
        if (!req) return { userInfo: null }
        let res: Response
        res = page === 'USER'
            ? await fetch(`http://localhost:3000/api/user?id=${query.userId}`)
            : await fetch(`http://localhost:3000/api/profile`)
        const userInfo = await res.json()
        return { userInfo }
    }
}

export default UserPage