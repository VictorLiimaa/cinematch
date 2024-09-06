import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Cadeado from "../../../public/assets/cadeado.svg";
import Email from "../../../public/assets/email.svg";
import styles from "@/styles/InfosPerfil.module.css";
import Dropdowns from "../components/Dropdown";


export default function InfosPerfil() {
  return (
    <div className={styles.containerPai}>
      <div className={styles.containerPerfil}>
        <Image className={styles.logo} src={Logo} alt="logo" />
        <div className={styles.divPerfil}> 
            <div className={styles.fotoPerfil}>
            <Image
                src="/assets/foto_perfil-.jpeg"
                alt="foto de perfil do usuário"
                className={styles.fotoperfil2}
                width={200}
                height={200}
            />
            </div>
            <div className={styles.btnPerfil}>
            <p className={styles.dadosDePerfil}>Nome:</p>
            <button className={styles.btnInfos}>Livya Kelly</button>
            <p className={styles.dadosDePerfil}>Senha:</p>
            <button className={styles.btnInfos}>
                <Image src={Cadeado} alt="icon cadeado" />
                xxxxxxxxxx
            </button>
            <p className={styles.dadosDePerfil}>Email:</p>
            <button className={styles.btnInfos}>
                <Image src={Email} alt="Icon de email" />
                livya@gmail.com
            </button>
            <button className={styles.btnSair}>Sair</button>
            </div>
        </div>
      </div>

      {/* Container das listas */}
      <div className={styles.containerListas}>
        <div className={styles.listas}>
            <Dropdowns />
        </div>
        </div>
    </div>
  );
}
