import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
    const { asPath } = useRouter()

    return ( 
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt=""/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton></SignInButton>
            </div>
        </header>
    )
}