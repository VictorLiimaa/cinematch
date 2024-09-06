import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';
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
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>
          <Image className={styles['logo-navbar']} src={Logo} alt="logo" />
        </div>
        <div className={`${styles['navbar-links']} ${isOpen ? styles.open : ''}`}>
          <Link href="/" className={styles['nav-link']}>Home</Link>
          <Link href="/movies" className={styles['nav-link']}>Filmes</Link>
          <Link href="/series" className={styles['nav-link']}>Series</Link>
          <Link href="/documentaries" className={styles['nav-link']}>Documentários</Link>
          <Link href="/lists" className={styles['nav-link']}>Listas</Link>
          <Link href="/about" className={styles['nav-link']}>Sobre</Link>
        </div>
        <div className={styles['navbar-icons']}>
          <Image className={styles['icon-search']} src={Search} alt="icon de pesquisa" />
          <Image className={styles['icon-bell']} src={Bell} alt="icon de sino" />
          <div className={styles['user-profile']}>
            <Image className={styles['icone']} src={Icon} alt="Foto do usuário" />
            <span>Usuário</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;