import { UserType } from '../../mockDataBase'
import UserPage, { userInfoServerRequest } from '../../components/UserPage'

const User = ( {userInfo}: {userInfo: UserType} ) => {
  return <UserPage userInfo={userInfo} page='USER' />
}

User.getInitialProps = userInfoServerRequest('USER')

export default User