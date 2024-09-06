import { signOut } from "next-auth/react";
import Image from "next/image";
import Logout from "../../../../public/assets/logout-2-svgrepo-com.svg";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="SingOutBtn"
    >
      <Image src={Logout} alt="Sair" />
      
    </button>
  );
}
