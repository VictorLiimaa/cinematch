import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/assets/cinemacth3-cropped.svg';
import Icon from '../../../public/assets/icon1.svg';
import Bell from '../../../public/assets/bell.svg';
import Search from '../../../public/assets/search.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Image className="logo-navbar" src={Logo} alt="logo" />
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/movies" className="nav-link">Filmes</Link>
          <Link href="/series" className="nav-link">Series</Link>
          <Link href="/documentaries" className="nav-link">Documentarios</Link>
          <Link href="/lists" className="nav-link">Listas</Link>
          <Link href="/about" className="nav-link">Sobre</Link>
        </div>
        <div className="navbar-icons">
          <Image className="icon-search" src={Search} alt="icon de pesquisa" />
          <Image className="icon-bell" src={Bell} alt="icon de sino" />
          <div className="user-profile">
            <Image className="icone" src={Icon} alt="Foto do usuario" />
            <span>Usuario</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
