import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/cinemacth3-cropped.svg";
import FAQ from "./components/buttons/faq";
import SobreNos from "./components/sobreNos";
import styles from '../styles/Index.module.css';


export default function Home() {
  return (
    <div className={styles.ContainerInicial}>
      <div className={styles['imagem-Fundo']}>
        <div className={styles.navinicial}>
          <Image className={styles.logo} src={Logo} alt="logo" />
          <Link href="/login" className={styles['btn-login']}>
            login
          </Link>
        </div>
        <div className={styles.sobre}>
          <h1 className={styles.fraseEfeito}>
            Cinematch: onde a paixão pelo cinema encontra a tecnologia
          </h1>
          <h2 className={styles.cadastro}>
            Comece a sua experiência no cinematch
            <Link className={styles['btn-cadastre-se']} href="/cadastro">
              Cadastre-se
            </Link>
          </h2>
        </div>
      </div>
      <SobreNos />
      <div className={styles.containerFaq}>
        <FAQ />
      </div>
    </div>
  );
}