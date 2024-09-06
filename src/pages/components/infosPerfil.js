import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/cinemacth3-cropped.svg";

export default function InfosPerfil() {
    return (
        <div className="containerPai">
        <div className="containerPerfil">
        <div className="logo-perfil">
            <Image src={Logo} alt="logo" className="logo-tela-perfil" />
        </div>
        <div className="fotoPerfil">
            <Image src="/assets/foto_perfil-.jpeg" alt="foto de perfil do usuário" className="foto-perfil" width={200} height={200} />
            <p className="dadosDePerfil">Nome:</p>
            <p className="dadosDePerfil">Senha:</p>
            <p className="dadosDePerfil">Email:</p>
            <button className="btnSair">Sair</button>
        </div>
        <div className="containerPerfil-2">
            <div>Listas</div>
        </div>
    </div>
    </div>
    );
}
