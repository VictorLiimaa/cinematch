import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../../../public/assets/cinemacth3-cropped.svg";
import Image from "next/image";
import styles from "../../../styles/FormCadastro.module.css";

export default function Telacadastro() {

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!name || !email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login");
    } else {
      setError(data.message); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerCadastro}>
        <Image src={Logo} alt="logo" className={styles.logoTela3} />
        <div className={styles.telaCadastro}>
          <h1 className={styles.tituloCadastro}>Crie a sua conta</h1>
         
          <form onSubmit={handleSubmit} className={styles.formulario}>
          <h2 className={styles.subtituloCadastro}>Nome</h2>

          <input
            name="name"
            type="text"
            placeholder="Digite o seu nome..."
            className={styles.inputCadastro}
          />

          <h2 className={styles.subtituloCadastro}>E-mail</h2>
          <input
            name="email"
            type="email"
            placeholder="Digite o seu email..."
            className={styles.inputCadastro}
          />

          <h2 className={styles.subtituloCadastro}>Senha</h2>
          <input
            name="password"
            type="password"
            placeholder="Digite a sua senha..."
            className={styles.inputCadastro}
          />
          
          <button type="submit" className={styles.btnCadastro}>
              Cadastro
          </button>
          </form>

          {error && <p style={{
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
              }}>{error}</p>}

        </div>
      </div>
    </div>
  );
}
