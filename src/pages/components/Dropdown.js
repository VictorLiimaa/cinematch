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
  const [isGenerosOpen, setIsGenerosOpen] = useState(true);
  const [isFavoritosOpen, setIsFavoritosOpen] = useState(true);
  const [isMinhasListasOpen, setIsMinhasListasOpen] = useState(true);

  const toggleGeneros = () => {
    setIsGenerosOpen(!isGenerosOpen);
  };
  const toggleFavoritos = () => {
    setIsFavoritosOpen(!isFavoritosOpen);
  };
  const toggleMinhasListas = () => {
    setIsMinhasListasOpen(!isMinhasListasOpen);
  };

  return (
    <div className={styles.containerDropdowns}>
      <div className={styles.dropdownContainer}>
        <button onClick={toggleGeneros} className={styles.dropdownButton}>
          GÊNEROS <span className={styles.icon}>{isGenerosOpen ? <Image src={Flecha2} alt="icon flecha2" /> : <Image src={Flecha} alt="icon flecha" />}</span>
        </button>
        {isGenerosOpen && (
          <div className={styles.dropdownContentContainer}>
            <div className={styles.dropdownContentGen}>
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
            <div className={styles.dropdownContentFav}>
              <div className={styles.filme}>
                <Image src={Interstellar} alt="Interstellar" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src={HarryPotter} alt="Harry Potter" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src={Mumia} alt="Múmia" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src={Malevola} alt="Malévola" width={120} height={180} />
              </div>
              <div className={styles.filme}>
                <Image src={Wandinha} alt="Wandinha" width={120} height={180} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.dropdownContainer}>
        <button onClick={toggleMinhasListas} className={styles.dropdownButton}>
            Minhas Listas <span className={styles.icon}>{isMinhasListasOpen ? <Image src={Flecha2} alt="icon flecha2" /> : <Image src={Flecha} alt="icon flecha" />}</span>
        </button>
      {isMinhasListasOpen && ( 
        <div className={styles.dropdownContentContainer}> 
        <div className={styles.dropdownContentLis}>
          <div className={styles.minhasListas}>
          <button className={styles.btnsListas}>Romance 12</button>
          <button className={styles.btnsListas}>Ação 8</button>
          <button className={styles.btnsListas}>Cómedia 10</button>
          <button className={styles.btnsListas}>Terror 6</button>
          <button className={styles.btnsListas}>Animação 5</button>
          <button className={styles.btnsListas}>Drama 9</button>
          <button className={styles.btnsListas}>Fantasia 7</button>
          <button className={styles.btnsListas}>Suspense 3</button>
          </div>
        </div>
        </div>
      )}
      </div>
    </div>
  );
}