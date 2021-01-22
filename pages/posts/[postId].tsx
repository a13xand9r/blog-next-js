import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CustomHead } from '../../components/CustomHead'
import { PostType } from '../../mockDataBase'

const Post = ({ serverPost }: { serverPost: null | PostType }) => {
  const [post, setPost] = useState<null | PostType>(serverPost)
  const router = useRouter()
  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/post?id=${router.query.postId}`)
      const data = await res.json()
      setPost(data)
    }
    if (!serverPost) load()
    post && post.status === 'ERROR' && router.push('/error')
  }, [])
  if (!post) {
    return <main className='main'>Loading...</main>
  }
  return (
    <>
      <CustomHead title={post.title}/>
      <main className='main'>
        <h2>{post.title}</h2>
        <div className='main__post' dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  )
}

Post.getInitialProps = async ({ req, query }) => {
  if (!req) return { serverPost: null }
  const res = await fetch(`http://${req.headers.host}/api/post?id=${query.postId}`)
  const serverPost = await res.json()
  return { serverPost }
}

export default Post