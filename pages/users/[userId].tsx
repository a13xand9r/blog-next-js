import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { UserType } from '../../mockDataBase'

const User = ( {userInfo}: {userInfo: UserType} ) => {
  const [user, setUser] = useState<null | UserType>(userInfo)
  const router = useRouter()
  console.log(userInfo)
  useEffect(() => {
    let load = async () => {
      const res = await fetch(`http://localhost:3000/api/user?id=${router.query.userId}`)
      const data = await res.json()
      setUser({name: data.name, id: data.id, photo: data.photo, posts: data.posts})
    }
    if (!userInfo) load()
  }, [])
  const goToPost = (id: string) => {
    router.push(`/posts/${id}`)
  }
  if (!user){
    return <Layout>Loading...</Layout>
  }
  return (
    <Layout>
      <main className='main'>
        <div className='main__userInfo'>
          <h2 className='main__userName'>{user.name}</h2>
          <img className='main__userPhoto' src={user.photo} alt=""/>
        </div>
        {user.posts ? user.posts.map(p => <div onClick={goToPost.bind(null, p.id)} className='main__item blockItem' key={p.id}>
          <h4>{p.title}</h4>
          <div className='blockItem__date'>{p.date}</div>
        </div>) : <h3 className='main__noPosts'>У пользователя пока нет постов</h3>}
      </main>
    </Layout>
  )
}

User.getInitialProps = async ( {req, query} ) => {
  if (!req) return {userPosts: null}
  const res = await fetch(`http://localhost:3000/api/user?id=${query.userId}`)
  const userInfo = await res.json()
  return { userInfo }
}

export default User