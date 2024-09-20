import { useState } from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/cinemacth3-cropped.svg";
import styles from '../../styles/SearchResults.module.css';
import SearchIcon from '../../../public/assets/search.svg';

export default function SearchResults() {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

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

      {/* Barra de Pesquisa */}
      <div className={styles.searchBar}>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder="Digite aqui..."
            value={query}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>
            <Image src={SearchIcon} alt="Search Icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
