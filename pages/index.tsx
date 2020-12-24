import Head from 'next/head'
import Link from 'next/link'
import { useReducer } from 'react'
import { Layout } from '../components/layout'
import styles from '../styles/Home.module.css'
import Post from './posts/[postId]'

const Home: React.FC = () => {
  // const [state, dispatch] = useReducer(postsReducer, initialPostsState)
  // const posts = state.posts.map((post) => <Post key={post.id} />)
  return (
    <Layout>
      <main className='main'>
        <h1>Hello</h1>
        <Link href='/profile'><a>Profile</a></Link>
        {/* {posts} */}
      </main>
    </Layout>
  )
}

export default Home
