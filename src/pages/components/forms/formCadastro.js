import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../../../public/assets/cinemacth3-cropped.svg";
import Image from "next/image";

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
      router.push("/login"); // Redireciona para a página de login após o cadastro 
    } else {
      setError(data.message); 
    }
  };


  return (
    <div className="container">
      <div className="containerCadastro">
        <Image src={Logo} alt="logo" className="logoTela3" />
        <div className="tela-cadastro">
          <h1 className="titulo-cadastro">Crie a sua conta</h1>
         
          <form onSubmit={handleSubmit} className="formulario">
          <h2 className="subtitulo-cadastro">Nome</h2>

          <input
            name="name"
            type="text"
            placeholder="Digite o seu nome..."
            className="inputCadastro"
          />

          <h2 className="subtitulo-cadastro">E-mail</h2>
          <input
            name="email"
            type="email"
            placeholder="Digite o seu email..."
            className="inputCadastro"
          />

          <h2 className="subtitulo-cadastro">Senha</h2>
          <input
            name="password"
            type="password"
            placeholder="Digite a sua senha..."
            className="inputCadastro"
          />
          
          <button type="submit" className="btnLogin">
              Cadastro
          </button>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibir mensagem de erro */}

        </div>
      </div>
    </div>
  );
}
