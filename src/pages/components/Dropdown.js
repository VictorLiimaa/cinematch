import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Dropdowns.module.css';

export default function Dropdowns() {
  const [isFavoritosOpen, setIsFavoritosOpen] = useState(false);
  const [isGenerosOpen, setIsGenerosOpen] = useState(false);

  const toggleGeneros = () => {
    setIsGenerosOpen(!isGenerosOpen);
  };
  const toggleFavoritos = () => {
    setIsFavoritosOpen(!isFavoritosOpen);
  };

  return (
    <div className={styles.containerDropdowns}>
      <div className={styles.dropdownContainer}>
        <button onClick={toggleGeneros} className={styles.dropdownButton}>
          GÊNEROS <span className={styles.icon}>{isGenerosOpen ? '▲' : '▼'}</span>
        </button>
        {isGenerosOpen && (
          <div className={styles.dropdownContent}>
            <button className={styles.btnsGeneros}>Ação</button>
            <button className={styles.btnsGeneros}>Fantasia</button>
            <button className={styles.btnsGeneros}>Comédia</button>
            <button className={styles.btnsGeneros}>Terror</button>
            <button className={styles.btnsGeneros}>Aventura</button>
            <button className={styles.btnsGeneros}>Animação</button>
            <button className={styles.btnsGeneros}>Drama</button>
            <button className={styles.btnsGeneros}>Romance</button>
          </div>
        )}
      </div>

      <div className={styles.dropdownContainer}>
        <button onClick={toggleFavoritos} className={styles.dropdownButton}>
          FAVORITOS <span className={styles.icon}>{isFavoritosOpen ? '▲' : '▼'}</span>
        </button>
        {isFavoritosOpen && (
          <div className={styles.dropdownContent}>
            <div className={styles.filme}>
              <Image src="/assets/filmes/interstellar.jpg" alt="Interstellar" width={120} height={180} />
            </div>
            <div className={styles.filme}>
              <Image src="/assets/filmes/harry_potter.jpg" alt="Harry Potter" width={120} height={180} />
            </div>
            <div className={styles.filme}>
              <Image src="/assets/filmes/mumia.jpg" alt="Múmia" width={120} height={180} />
            </div>
            <div className={styles.filme}>
              <Image src="/assets/filmes/malevola.jpg" alt="Malévola" width={120} height={180} />
            </div>
            <div className={styles.filme}>
              <Image src="/assets/filmes/wandinha.jpg" alt="Wandinha" width={120} height={180} />
            </div>
            <div className={styles.filme}>
              <Image src="/assets/filmes/maze_runner.jpg" alt="Maze Runner" width={120} height={180} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
