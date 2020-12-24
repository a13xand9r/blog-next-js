import { users } from '../../mockDataBase'

export default (req, res) => {
  if (req.method === 'GET') {
    let usersList = users.map( u => ({id: u.id, name: u.name, photo: u.photo}) )
    res.statusCode = 200
    res.json(usersList)
  }
}
