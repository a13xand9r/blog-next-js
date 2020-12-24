import { UserType } from '../../mockDataBase'
import UserPage, { userInfoServerRequest } from '../../components/UserPage'
import { useRouter } from 'next/router'

const User = ( {userInfo}: {userInfo: UserType} ) => {
  // const router = useRouter()
  // userInfo && userInfo.status === 'ERROR' && router.push('/error')
  return <UserPage userInfo={userInfo} page='USER' />
}

User.getInitialProps = userInfoServerRequest('USER')

export default User