import Link from "next/link";
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Image from "next/image";
import SignOut from "./buttons/signOutBtn";


export default function IniciarQuest() {
  return (
    <div className="containerInicial">
      <div className="navInicial">
        <Image src={Logo} alt="logo" className="Logo-inicio" />
        <SignOut />
      </div>
      <div className="boasvindas">
        <div className="titulo-inicial">
          <h1>Olá, Usuario! Bem-vindo ao Cinematch</h1>
        </div>
        <div className="subtitle-inicial">
          <p>
            Nos conte mais sobre seus gostos e preferências para personalizar
            suas recomendações de filmes.
          </p>
        </div>
        <div>
            <Link href="/genero" className="btn-iniciar-questionario">
                Iniciar Questionário
            </Link>
        </div>
      </div>
    </div>
  );
}
