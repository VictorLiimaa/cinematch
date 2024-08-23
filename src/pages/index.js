import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/cinemacth3-cropped.svg";
import FAQ from "./components/buttons/faq";
import SobreNos from "./components/sobreNos";

export default function Home() {
  return (
    <div className="ContainerInicial">
      <div className='imagem-Fundo'>
      <div className="navinicial">
        <Image className="logo" src={Logo} alt="logo" />
        <Link href="/login" className="btn-login">
          login
        </Link>
      </div>
      <div className="sobre">
        <h1 className="fraseEfeito">
          Cinematch: onde a paixão pelo cinema encontra a tecnologia
        </h1>
        <h2 className="cadastro">
          Comece a sua experiencia no cinematch
          <Link className="btn-cadastre-se" href="/cadastro">
            Cadastre-se
          </Link>
        </h2>
      </div>
      </div>
      <SobreNos />
      <div className="containerFaq">
        <FAQ />
      </div>
    </div>
  );
}
