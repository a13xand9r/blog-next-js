import { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let userInfo = getUser(req.query.id as string)
    if (userInfo) userInfo.status = 'OK'
    else userInfo = { status: 'ERROR' }
    res.statusCode = 200
    res.json(userInfo)
  }
}