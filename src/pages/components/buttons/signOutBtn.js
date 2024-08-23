import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="SingOutBtn"
    >
      Sair
    </button>
  );
}
