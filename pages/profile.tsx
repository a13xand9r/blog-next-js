import UserPage, { userInfoServerRequest } from '../components/UserPage'
import { UserType } from '../mockDataBase'

const Profile = ({userInfo}: {userInfo: UserType | null}) => {
    return <UserPage userInfo={userInfo} page='PROFILE' />
}

Profile.getInitialProps = userInfoServerRequest('PROFILE')

export default Profile