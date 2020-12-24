import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout'
import { PostType } from '../../mockDataBase'

const Post = ({ serverPost }: { serverPost: null | PostType }) => {
  const [post, setPost] = useState<null | PostType>(serverPost)
  const router = useRouter()
  useEffect(() => {
    let load = async () => {
      const res = await fetch(`http://localhost:3000/api/post?id=${router.query.postId}`)
      const data = await res.json()
      setPost(data)
    }
    if (!serverPost) load()
  }, [])
  post && post.status === 'ERROR' && router.push('/error')
  if (!post) {
    return <Layout>Loading...</Layout>
  }
  return (
    <Layout>
      <main className='main'>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </Layout>
  )
}

Post.getInitialProps = async ({ req, query }) => {
  if (!req) return { Post: null }
  const res = await fetch(`http://localhost:3000/api/post?id=${query.postId}`)
  const post = await res.json()
  return { post }
}

export default Post