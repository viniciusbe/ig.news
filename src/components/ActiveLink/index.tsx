import { useRouter } from "next/dist/client/router";

interface ActiveLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  activeClassName: string;
  path: string;
}

export function ActiveLink({
  children,
  activeClassName,
  path,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter();

  const className = router.asPath === path ? activeClassName : "";

  const handle = () => {
    router.push(path);
  };

  return (
    <span className={className} onClick={handle} {...rest}>
      {children}
    </span>
  );
}
