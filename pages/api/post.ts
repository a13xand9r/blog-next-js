import { NextApiRequest, NextApiResponse } from 'next'
import { PostType, users } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let post: PostType
    users.filter(u => u.posts).forEach(u => {
        const p = u.posts.find(p => p.id === req.query.id)
        if (p) post = p
    })
    if (post) post.status = 'OK'
    else post = { status: 'ERROR' }
    res.statusCode = 200
    res.json(post)
  }
}