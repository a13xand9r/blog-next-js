import { getUsers } from '../../mockDataBase'

export default (req, res) => {
  if (req.method === 'GET') {
    const usersList = getUsers()
    res.statusCode = 200
    res.json(usersList)
  }
}