import { FormEvent, useState } from 'react'
import { CustomHead } from '../components/CustomHead'

const NewPost = () => {
    const [postBody, setPostBody] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const post = {
            title: postTitle,
            body: postBody
        }
        fetch(`http://localhost:3000/api/newPost`, {
            method: 'POST',
            body: JSON.stringify(post)
        })
    }
    return <>
        <CustomHead title='Create New Post'/>
        <main className='main'>
            <form onSubmit={submitForm}>
                <input type='text' name='postTitle' onChange={(e) => setPostTitle(e.target.value)} value={postTitle}/>
                <textarea value={postBody} onChange = {(e) => setPostBody(e.target.value)} name='postBody'></textarea>
                <button>Send form</button>
            </form>
        </main>
    </>
}

export default NewPost