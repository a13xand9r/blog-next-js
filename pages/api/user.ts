import { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let userInfo = users.find( u => u.id === req.query.id )
    if (userInfo) userInfo.status = 'OK'
    else userInfo = { status: 'ERROR' }
    res.statusCode = 200
    res.json(userInfo)
  }
}