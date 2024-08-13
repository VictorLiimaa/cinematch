import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Image from 'next/image'

export default function Telacadastro() {
    return(
        <div className="container">
        <div className="containerCadastro">
          <Image src={Logo} alt="logo" className="logoTela3" />/
          <div className="tela-cadastro">
            <h1 className="titulo-cadastro">Crie a sua conta</h1>
            <h2 className="subtitulo-cadastro">Nome</h2>
            <input
              type="text"
              placeholder="Digite o seu nome..."
              className="inputCadastro"
            />
            <h2 className="subtitulo-cadastro">E-mail</h2>
            <input
              type="text"
              placeholder="Digite o seu email..."
              className="inputCadastro"
            />
            <h2 className="subtitulo-cadastro">Senha</h2>
            <input
              type="password"
              placeholder="Digite a sua senha..."
              className="inputCadastro"
            />
            <button className="btnCadastro" type="button">
              cadastre-se
            </button>
          </div>
        </div>
      </div>
    );
}