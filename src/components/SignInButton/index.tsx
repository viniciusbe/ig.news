import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";
import { Button } from "../Button";
import { useState, useEffect } from "react";

export function SignInButton() {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);

  const handleSession = async () => {
    setLoading(true);

    session ? await signOut() : await signIn("github");
  };

  useEffect(() => {
    if (session) setLoading(false);
  }, []);

  return (
    <Button
      className={styles.signInButton}
      onClick={handleSession}
      loading={loading}
    >
      {session ? (
        <>
          <FaGithub color="#04d361" />
          {session.user.name}
          <FiX color="#737380" className={styles.closeIcon} />
        </>
      ) : (
        <>
          <FaGithub color="#eba417"></FaGithub>
          Sign In with Github
        </>
      )}
    </Button>
  );
}
