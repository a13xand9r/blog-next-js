import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { CustomHead } from '../components/CustomHead'
import { PostType } from '../mockDataBase'

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [success, setSuccess] = useState(false)
    const [newPost, setNewPost] = useState<NewPostType | null>(null)
    const router = useRouter()
    useEffect(() => {
        const sendPost = async () => {
            try {
                const res = await fetch(`/api/newPost`, {
                    method: 'POST',
                    body: JSON.stringify(newPost)
                })
                const data: PostType = await res.json()
                setSuccess(true)
                setTimeout(() => router.push(`/posts/${data.id}`), 2000)
            } catch(e) {
                alert(e)
            }
        }
        newPost && sendPost()
    }, [newPost])
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const post = {
            title: postTitle,
            body: postBody
        }
        setNewPost(post)
    }
    return <>
        <CustomHead title='Create New Post' />
        <main className='main'>
            <div className={`main__success ${success && 'main__successVisible'}`}>Success</div>
            <form className='main__form newPostForm' onSubmit={submitForm}>
                <label>
                    Post title:
                    <input type='text'
                        id='postTitle'
                        name='postTitle'
                        className='newPostForm__inputTitle'
                        required={true}
                        autoComplete='off'
                        onChange={(e) => setPostTitle(e.target.value)} value={postTitle} />
                </label>
                <label className='main__bodyLabel'>
                    Post body:
                    <textarea value={postBody}
                        id='postBody'
                        name='postBody'
                        className='newPostForm__inputBody'
                        required={true}
                        onChange={(e) => setPostBody(e.target.value)}></textarea>
                </label>
                <button className='newPostForm__button'>Send form</button>
            </form>
        </main>
    </>
}

export default NewPost

type NewPostType = {
    title: string
    body: string
}