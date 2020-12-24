import styles from '../styles/header.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { memo } from 'react'

export const Header: React.FC = memo(
    () => {
        const router = useRouter()
        const url = router.pathname
        return(
            <div className={styles.header}>
                <div className={styles.header__wrapper}>
                    <div onClick={()=>router.push('/')} className={cn(styles.header__home, { [styles.header__choose]: url === '/' })}>
                        <div className={styles.header__image}>
                            <Image src="/homeIcon.svg" alt="Home" layout="fill" />
                        </div>
                    </div>
                    <div onClick={()=>router.push('/users')} className={cn(styles.header__users, { [styles.header__choose]: url === '/users' })}>
                        <div className={styles.header__image}>
                            <Image src="/usersIcon.png" alt="Home" layout="fill" />
                        </div>
                    </div>
                    <div onClick={()=>router.push('/profile')} className={cn(styles.header__profile, { [styles.header__choose]: url === '/profile' })}>
                        <div className={styles.header__image}>
                           <Image src="/userIcon.png" alt="Home" layout="fill" />
                        </div>
                    </div>
                    <div onClick={()=>router.push('/newPost')} className={cn(styles.header__newPost, { [styles.header__choose]: url === '/newPost' })}>
                        <div className={styles.header__image}>
                            <Image src="/newIcon.png" alt="Home" layout="fill" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)