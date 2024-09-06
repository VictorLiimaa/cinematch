import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Carrossel.module.css';
import Play from '../../../public/assets/play.svg';
import Bookmark from '../../../public/assets/bookmark.svg';
import movies from '../../pages/data/movies.json';


const Carrossel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === movies.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? movies.length - 1 : prevSlide - 1
      );
    };
  
    return (
      <>
        <section
          className={styles.carousel}
          style={{ backgroundImage: `url(${movies[currentSlide].image})` }}
        >
          <div className={styles['carousel-content']}>
            <div className={styles['film-badge']}>Filme</div>
            <div className={styles['carousel-text']}>
              <h1>{movies[currentSlide].title}</h1>
              <p>{movies[currentSlide].duration} • {movies[currentSlide].genre}</p>
              <p>{movies[currentSlide].description}</p>
              <div className={styles['carousel-buttons']}>
                <button className={styles['btn-primary']}>
                  <Image src={Play} alt="icon play" /> Abrir Filme
                </button>
                <button className={styles['btn-secondary']}>
                  <Image src={Play} alt="icon play" /> Ver Trailer
                </button>
                <button className={styles['btn-tertiary']}>
                  <Image src={Bookmark} alt="icon Bookmark" /> Salvar
                </button>
              </div>
            </div>
          </div>
          <div className={styles['carousel-controls']}>
            <button onClick={prevSlide} className={styles['prev-slide']}>◀</button>
            <button onClick={nextSlide} className={styles['next-slide']}>▶</button>
          </div>
        </section>
      </>
    );
  };
  
  export default Carrossel;