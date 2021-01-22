import { v4 } from 'uuid'
import { NextApiRequest, NextApiResponse } from 'next'
import { addPost, PostType } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const post: PostType = {...JSON.parse(req.body), date: new Date().toLocaleString(), id: Math.floor(Math.random() * 10000).toString()}
    post.body = ['<p>', ...post.body.split('').map(item => {
        if (item === '\n') return '</p> <p>'
        else return item
    }), '</p>'].join('').split(' ').filter(l => l !== '<p></p>').join(' ')
    console.log(post)
    addPost(post)
    res.statusCode = 200
    res.json(post)
  }
}