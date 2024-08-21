import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Link from 'next/link';
import Image from 'next/image'
import GoogleBtn from './googleBtn';


export default function Telalogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push('/questionario'); // Redireciona após login bem-sucedido
    }
  };

  return (
    <div className="container">
      <div className="containerLogin">
        <Image src={Logo} alt="logo" className="logoTela2" />/
        <div className="login">
          <h1 className="titulo">Faca login na sua conta</h1>
          <h2 className="subtitulo">E-mail</h2>
          <input
            type="text"
            placeholder="Digite o seu email"
            className="inputLogin"
          />
          <h2 className="subtitulo">Senha</h2>
          <input
            type="password"
            placeholder="Digite a sua senha"
            className="inputLogin"
          />
          <Link href="/questionario" className="btnLogin">
            Login
          </Link>

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
