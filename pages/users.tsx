import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Layout } from '../components/layout'
import { UserType } from '../mockDataBase'

const Users = ( {usersList}: {usersList: Array<UserType> | null} ) => {
    let [users, setUsers] = useState<Array<UserType> | null>(usersList)

    useEffect(() => {
        let load = async () => {
            const res = await fetch('http://localhost:3000/api/users')
            const data = await res.json()
            setUsers(data)
        }
        if (!usersList) load()
    }, [])
    const router = useRouter()
    const goToUserPage = (id: string) => {
        router.push(`/users/${id}`)
    }

    if (!users) {
        return <Layout>
            <main className='main'>
                Loading...
            </main>
        </Layout>
    }
    return <>
        <Layout>
            <main className='main'>
                {users.map(u => <div className='main__item blockItem' key={u.id} onClick={goToUserPage.bind(null, u.id)}>
                    <img className='blockItem__userPhoto' src={u.photo} alt="" />
                    <span>{u.name}</span>
                </div>)}
            </main>
        </Layout>
    </>
}

Users.getInitialProps = async ({ req }) => {
    if (!req) return {usersList: null}
    const res = await fetch('http://localhost:3000/api/users')
    const usersList = await res.json()
    return { usersList }
  }

export default Users