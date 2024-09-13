import Link from "next/link";
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Image from "next/image";
import SignOut from "./buttons/signOutBtn"
import styles from "../../styles/Dashboard.module.css";


export default function IniciarQuest() {
  return (
    <div className={styles.containerInicial}>
      <div  className={styles.navInicial}>
        <Image src={Logo} alt="logo" className={styles.logoInicio} />
        <SignOut />
      </div>
      <div className={styles.boasvindas}>
        <div className={styles.tituloInicial}>
          <h1>Olá, Usuário! Bem-vindo ao Cinematch</h1>
        </div>
        <div className={styles.subtitleInicial}>
          <p>
            Nos conte mais sobre seus gostos e preferências para personalizar
            suas recomendações de filmes.
          </p>
        </div>
        <div>
            <Link href="/genero" className={styles.btnIniciarQuestionario}>
                Iniciar Questionário
            </Link>
        </div>
      </div>
    </div>
  );
}
