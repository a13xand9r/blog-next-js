import { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let userInfo = users.find( u => u.id === req.query.id )
    res.statusCode = 200
    res.json(userInfo)
  }
}
// .posts.map(p => ({...p, date: p.date.getDate()}))