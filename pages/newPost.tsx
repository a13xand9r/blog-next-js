import { useRouter } from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { CustomHead } from '../components/CustomHead'
import { PostType } from '../mockDataBase'
import { CSSTransition } from 'react-transition-group'

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
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
                setTimeout(() => setNewPost(null), 1100)
                setTimeout(() => router.push(`/posts/${data.id}`), 1500)
            } catch(e) {
                setNewPost(null)
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
            <CSSTransition in={newPost} timeout={200} classNames="loader" mountOnEnter unmountOnExit>
                <div className='loader'></div>
            </CSSTransition>
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