import { useSession } from "next-auth/client";

import { ActiveLink } from "../ActiveLink";
import { SignOutButton } from "../SessionButtons/signOutButton";
import { SignInButton } from "../SessionButtons/signInButton";

import styles from "./styles.module.scss";

export function Header() {
  const [session] = useSession();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />

        <nav>
          <ActiveLink activeClassName={styles.active} path="/">
            Home
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} path="/posts">
            Posts
          </ActiveLink>
        </nav>

        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
}
