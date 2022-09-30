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

    signIn("github");
  };

  useEffect(() => {
    if (session) setLoading(false);
  }, [session]);

  return (
    <Button
      className={styles.sessionButton}
      onClick={handleSession}
      loading={loading}
    >
      <FaGithub color="#eba417"></FaGithub>
      Sign In with Github
    </Button>
  );
}
