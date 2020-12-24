import { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let userInfo = users[0]
    userInfo.status = 'OK'
    res.statusCode = 200
    res.json(userInfo)
  }
}