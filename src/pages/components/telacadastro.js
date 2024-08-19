import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import Image from "next/image";

export default function Telacadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulário enviado');
  
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });      
  
      const responseText = await res.text();
      console.log('Resposta do servidor:', responseText);
  
      if (!res.ok) {
        setError(responseText);
        return;
      }
  
      const data = JSON.parse(responseText);
  
      if (data.error) {
        setError(data.error);
      } else {
        router.push("/questionario");
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário', error);
      setError('Erro ao processar a solicitação.');
    }
  };
  

  return (
    <div className="container">
      <div className="containerCadastro">
        <Image src={Logo} alt="logo" className="logoTela3" />
        <div className="tela-cadastro">
          <h1 className="titulo-cadastro">Crie a sua conta</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
          <h2 className="subtitulo-cadastro">Nome</h2>
          <input
            type="text"
            placeholder="Digite o seu nome..."
            className="inputCadastro"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h2 className="subtitulo-cadastro">E-mail</h2>
          <input
            type="email"
            placeholder="Digite o seu email..."
            className="inputCadastro"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h2 className="subtitulo-cadastro">Senha</h2>
          <input
            type="password"
            placeholder="Digite a sua senha..."
            className="inputCadastro"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btnLogin">
              Cadastro
          </button>
          {/*
           <Link href="/questionario" className="btnLogin">
            Cadastro
          </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
