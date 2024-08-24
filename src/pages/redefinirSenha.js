import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/assets/cinemacth3-cropped.svg"; // Certifique-se de que o caminho está correto

export default function RedefinirSenha() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { token } = router.query; // Captura o token da URL

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem. Tente novamente.');
      return;
    }

    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Senha redefinida com sucesso!');
        router.push('/login'); // Redireciona o usuário para a página de login
      } else {
        setError(result.error || 'Erro ao redefinir a senha. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setError('Erro ao redefinir a senha. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container">
      <div className="containerLogin">
        <Image src={Logo} alt="logo" className="logoTela2" />
        <div className="login">
          <h1 className="titulo">Redefinir senha</h1>
          <h2 className="subtitulo">Nova senha</h2>
          <form onSubmit={handleSubmit} className="formulario">
            <input
              name="password"
              type="password"
              placeholder="Digite a sua nova senha"
              className="inputLogin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <h2 className="subtitulo">Confirme a senha</h2>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirme a sua nova senha"
              className="inputLogin"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="btnLogin">Redefinir</button>
          </form>
          {message && <p className="mensagemSucesso">{message}</p>}
          {error && <p className="mensagemErro">{error}</p>}
        </div>
      </div>
    </div>
  );
}