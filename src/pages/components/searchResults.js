import { useState } from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import styles from '@/styles/SearchResults.module.css';

export default function SearchResults() {
  const [query, setQuery] = useState('');

  return (
    <div className={styles.searchContainer}>
      {/* Header */}
      <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={Logo} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Filmes</a>
          <a href="#">Séries</a>
          <a href="#">Documentários</a>
          <a href="#">Listas</a>
          <a href="#">Sobre</a>
        </nav>
        <div className={styles.profile}>
          <span>Usuário</span>
        </div>
      </header>
    </div>
  );
}
