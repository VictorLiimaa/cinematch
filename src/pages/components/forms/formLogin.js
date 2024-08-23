import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Image from 'next/image'
import GoogleBtn from '../buttons/googleBtn';


export default function Telalogin() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/questionario",  // Redirecionar para o questionário após login 
    });

    if (result.error) {
      setError(result.error);  // Definir a mensagem de erro
    } else {
      router.push(result.url);  // Redirecionar após login
    }
  };
  
  return (
    <div className="container">
      <div className="containerLogin">
        <Image src={Logo} alt="logo" className="logoTela2" />

        <div className="login">
          <h1 className="titulo">Faca login na sua conta</h1>
          <h2 className="subtitulo">E-mail</h2>
          <form onSubmit={handleSubmit} className="formulario">

          <input
            name="email"
            type="text"
            placeholder="Digite o seu email"
            className="inputLogin"
          />
          <h2 className="subtitulo">Senha</h2>

          <input
            name="password"
            type="password"
            placeholder="Digite a sua senha"
            className="inputLogin"
          />
          <button className="btnLogin">
            Login
          </button>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Exibir mensagem de erro */}

          <GoogleBtn />

          <Link href="/" className="esqueceuSenha">
            Esqueceu a senha?
          </Link>
          <Link href="/cadastro" className="esqueceuSenha">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
