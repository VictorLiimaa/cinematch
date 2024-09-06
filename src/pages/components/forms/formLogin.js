import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../../../../public/assets/cinemacth3-cropped.svg";
import Image from "next/image";
import GoogleBtn from "../buttons/googleBtn";
import styles from '../../../styles/FormLogin.module.css';


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
      callbackUrl: "/questionario", // Redirecionar para o questionário após login
    });

    if (result.error) {
      setError(result.error); // Definir a mensagem de erro
    } else {
      router.push(result.url); // Redirecionar após login
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <Image src={Logo} alt="logo" className={styles.logoTela2} />

        <div className={styles.login}>
          <h1 className={styles.titulo}>Faça login na sua conta</h1>
          <h2 className={styles.subtitulo}>E-mail</h2>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <input
              name="email"
              type="text"
              placeholder="Digite o seu email"
              className={styles.inputLogin}
            />
            <h2 className={styles.subtitulo}>Senha</h2>

            <input
              name="password"
              type="password"
              placeholder="Digite a sua senha"
              className={styles.inputLogin}
            />
            <button className={styles.btnLogin}>Login</button>
          </form>
          {error && (
            <div
              style={{
                position: "fixed",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                border: "1px solid #f5c6cb",
                borderRadius: "4px",
                fontSize: "14px",
                zIndex: 1000,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {error}
            </div>
          )}
          <GoogleBtn />

          <Link href="/esqueceuSenha" className={styles.esqueceuSenha}>
            Esqueceu a senha?
          </Link>
          <Link href="/cadastro" className={styles.esqueceuSenha}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}