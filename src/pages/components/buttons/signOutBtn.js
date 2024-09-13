import { signOut } from "next-auth/react";
import Image from "next/image";
import Logout from "../../../../public/assets/logout-2-svgrepo-com.svg";
import styles from "../../../styles/Dashboard.module.css";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className={styles.SingOutBtn}
    >
      <Image src={Logout} alt="Sair" />
      
    </button>
  );
}
