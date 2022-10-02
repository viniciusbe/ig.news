import { useState } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";
import { Spinner } from "../Spinner";
import { Button } from "../Button";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSubscribe() {
    setLoading(true);
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  }

  return (
    <Button
      className={styles.subscribeButton}
      onClick={handleSubscribe}
      loading={loading}
    >
      {session
        ? session.activeSubscription
          ? "See posts"
          : "Subscribe now"
        : "Sign In with Github"}
    </Button>
  );
}
