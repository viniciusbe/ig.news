import { FaGithub } from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import { signIn,signOut,useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361"></FaGithub>
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon}></FiX>
        </button>
    ) : (
            <button
                type="button"
                className={styles.signInButton}
                onClick={() => signIn('github')}
            >
                <FaGithub color="#eba417"></FaGithub>
            Sign In with Github
            </button>
    )
}