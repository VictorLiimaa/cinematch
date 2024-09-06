import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import styles from '@/styles/InfosPerfil.module.css';


export default function InfosPerfil() {
    return (
        <div className={styles.containerPai}>
            <div className={styles.containerPerfil}>
                <div className={styles['logo-perfil']}>
                    <Image src={Logo} alt="logo" className={styles['logo-tela-perfil']} />
                </div>
                <div className={styles.fotoPerfil}>
                    <Image src="/assets/foto_perfil-.jpeg" alt="foto de perfil do usuário" className={styles['foto-perfil']} width={200} height={200} />
                    <p className={styles.dadosDePerfil}>Nome:</p>
                    <p className={styles.dadosDePerfil}>Senha:</p>
                    <p className={styles.dadosDePerfil}>Email:</p>
                    <button className={styles.btnSair}>Sair</button>
                </div>
                <div className={styles['containerPerfil-2']}>
                    <div>Listas</div>
                </div>
            </div>
        </div>
    );
}
