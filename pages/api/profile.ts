import { NextApiRequest, NextApiResponse } from 'next'
import { getProfile } from '../../mockDataBase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const userInfo = getProfile()
    userInfo.status = 'OK'
    res.statusCode = 200
    res.json(userInfo)
  }
}