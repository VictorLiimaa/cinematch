import Image from "next/image";
import Logo from "../../public/assets/cinemacth3-cropped.svg";
import Link from "next/link";

export default function EsqueceuSenha() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (email) {
      try {
        console.log("Enviando e-mail para:", email);
        alert("Um link de redefinição de senha foi enviado para o seu e-mail.");
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        alert("Erro ao enviar e-mail. Por favor, tente novamente.");
      }
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };
  return (
    <div className="container">
      <div className="containerLogin">
        <Image src={Logo} alt="logo" className="logoTela2" />

        <div className="login">
          <h1 className="titulo">Esqueceu a senha?</h1>
          <h2 className="subtitulo">E-mail</h2>
          <form onSubmit={handleSubmit} className="formulario">
            <input
              name="email"
              type="text"
              placeholder="Digite o seu email"
              className="inputLogin"
            />
            <Link href="/redefinirSenha">
              <button className="btnLogin">Enviar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
