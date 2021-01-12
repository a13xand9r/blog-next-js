import { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let posts = []
    users.forEach(u => {
        if (u.posts) posts = [...posts, ...u.posts]
    })
    res.statusCode = 200
    res.json(posts)
  }
}