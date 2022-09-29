import { ActiveLink } from "../ActiveLink";

import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink activeClassName={styles.active} path="/">
            Home
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} path="/posts">
            Posts
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
