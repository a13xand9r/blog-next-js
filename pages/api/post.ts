import { NextApiRequest, NextApiResponse } from 'next'
import { getPost } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let post = getPost(req.query.id as string)
    if (post) post.status = 'OK'
    else post = { status: 'ERROR' }
    res.statusCode = 200
    res.json(post)
  }
}