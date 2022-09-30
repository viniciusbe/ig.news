import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";
import { Button } from "../Button";

export function SignOutButton() {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);

    await signOut();
  };

  useEffect(() => {
    if (!session) setLoading(false);
  }, [session]);

  return (
    <Button
      className={styles.sessionButton}
      onClick={handleSignOut}
      loading={loading}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </Button>
  );
}
