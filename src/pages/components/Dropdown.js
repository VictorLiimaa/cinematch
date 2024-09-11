import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Dropdowns.module.css';
import Flecha from "../../../public/assets/flecha.svg";
import Flecha2 from "../../../public/assets/flecha2.svg";
import Interstellar from "../../../public/assets/Interstellar.jpeg";
import HarryPotter from "../../../public/assets/Harry Potter.jpeg";
import Mumia from "../../../public/assets/Mumia.jpeg";
import Malevola from "../../../public/assets/Malevola.jpeg";
import Wandinha from "../../../public/assets/wandinha.jpeg";

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
          GÊNEROS <span className={styles.icon}>{isGenerosOpen ? <Image src={Flecha2} alt="icon flecha2" /> : <Image src={Flecha} alt="icon flecha" />}</span>
        </button>
        {isGenerosOpen && (
          <div className={styles.dropdownContentContainer}>
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
          </div>
        )}
      </div>

      <div className={styles.dropdownContainer}>
        <button onClick={toggleFavoritos} className={styles.dropdownButton}>
          FAVORITOS <span className={styles.icon}>{isFavoritosOpen ? <Image src={Flecha2} alt="icon flecha2" /> : <Image src={Flecha} alt="icon flecha" />}</span>
        </button>
        {isFavoritosOpen && (
          <div className={styles.dropdownContentContainer}> 
            <div className={styles.dropdownContent}>
              <div className={styles.filme}>
                <Image src="/assets/Interstellar.jpeg" alt="Interstellar" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src="/assets/Harry Potter.jpeg" alt="Harry Potter" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src="/assets/Mumia.jpeg" alt="Múmia" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src="/assets/Malevola.jpeg" alt="Malévola" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src="/assets/wandinha.jpeg" alt="Wandinha" width={120} height={180} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
