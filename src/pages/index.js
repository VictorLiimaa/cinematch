import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/cinemacth3-cropped.svg';

export default function Home() {
  return (
    <div className="tela-inicio">
    <Image src={Logo} alt="logo" className="logo" />
    <div className='btn-login'>
      <Link href="/login">
        <button className='btn' type='button'>Login</button>
      </Link>
      <h1 className='cadastro'>
        Não tem uma conta?
        <Link href="/telalogin" className='cadastre-se'> Cadastre-se</Link>
      </h1>
    </div>
  </div>
  );
}
