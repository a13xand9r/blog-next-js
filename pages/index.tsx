import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useReducer, useState } from 'react'
import { Layout } from '../components/layout'
import { PostType } from '../mockDataBase'
import styles from '../styles/Home.module.css'
import Post from './posts/[postId]'

const Home = ({ serverPosts }: { serverPosts: Array<PostType> }) => {
  const [posts, setPosts] = useState<null | Array<PostType>>(serverPosts)
  useEffect(() => {
    const load = async () => {
      const res = await fetch(`http://localhost:3000/api/home`)
      const data = await res.json()
      setPosts(data)
    }
    if (!serverPosts) load()
  }, [])
  const router = useRouter()
  const goToPost = (id: string) => {
    router.push(`/posts/${id}`)
  }
  if (!posts) {
    return <main className='main'>Loading...</main>
  }
  return (
    <>
      <main className='main'>
        {posts.map(p => <div onClick={goToPost.bind(null, p.id)} className='main__item blockItem' key={p.id}>
          <h4>{p.title}</h4>
          <div className='blockItem__date'>{p.date}</div>
        </div>)}
      </main>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  if (!req) return { Post: null }
  const res = await fetch(`http://localhost:3000/api/home`)
  const post = await res.json()
  return { post }
}

export default Home
