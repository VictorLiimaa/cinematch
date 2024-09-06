import Image from 'next/image';
import Star from '../../../public/assets/star.svg';
import styles from '@/styles/Section.module.css';


const Section = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles['section-items']}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles['card-image']} />
            <div className={styles['card-overlay']}>
              <h3 className={styles['card-title']}>{item.title}</h3>
              <div className={styles['card-rating']}>
                <Image src={Star} alt="Estrela amarela" width={14} height={14} />
                <span>{item.rating}</span>
              </div>
              <p className={styles['card-genre']}>{item.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;