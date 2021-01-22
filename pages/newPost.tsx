import { FormEvent, useState } from 'react'
import { CustomHead } from '../components/CustomHead'

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const post = {
            title: postTitle,
            body: postBody
        }
        try {
            await fetch(`http://localhost:3000/api/newPost`, {
                method: 'POST',
                body: JSON.stringify(post)
            })
            setPostTitle('')
            setPostBody('')
        } catch(e) {
            alert(e)
        }
    }
    return <>
        <CustomHead title='Create New Post' />
        <main className='main'>
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