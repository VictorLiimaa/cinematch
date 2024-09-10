import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <p className={styles.text}>
            Encontre seu próximo filme favorito com o Cinematch: onde a paixão pelo cinema encontra a tecnologia.
          </p>
          <div className={styles.links}>
            <Link href="/politica-privacidade">Política de Privacidade</Link>
            <span> | </span>
            <Link href="/termos-servico">Termos de Serviço</Link>
            <span> | </span>
            <Link href="/linguagem">Linguagem</Link>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.navigation}>
            <Link href="/">Home</Link>
            <span> / </span>
            <Link href="/descubra">Descubra</Link>
            <span> / </span>
            <Link href="/sobre">Sobre</Link>
            <span> / </span>
            <Link href="/perfil">Perfil</Link>
          </div>
          <div className={styles.socialIcons}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/github.svg" alt="github" width={24} height={24} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;