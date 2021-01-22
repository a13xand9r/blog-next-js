import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let posts = getAllPosts()
    res.statusCode = 200
    res.json(posts)
  }
}