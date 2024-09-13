import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/assets/cinemacth3-cropped.svg";
import Link from "next/link";
import styles from "../../../styles/Generos.module.css";

const generos = [
  "Ação",
  "Romance",
  "Comédia",
  "Drama",
  "Terror",
  "Ficção Científica",
  "Animação",
  "Fantasia",
  "Documentário",
  "Suspense",
  "Musical",
  "Thriller",
  "Família",
  "Aventura",
  "Comédia Romântica",
  "Crime",
  "Histórico",
  "Biográfico",
  "Guerra",
  "Western",
];

export default function Genero() {
  const [selectedGeneros, setSelectedGeneros] = useState([]);

  const toggleGenero = (genero) => {
    if (selectedGeneros.includes(genero)) {
      setSelectedGeneros(selectedGeneros.filter((g) => g !== genero));
    } else {
      setSelectedGeneros([...selectedGeneros, genero]);
    }
  };

  return (
    <div className={styles.containerGenero}>
      <div className={styles.logoGeneros}>
        <Image src={Logo} alt="logo" className={styles.logoTelaGenero} />
      </div>
      <div  className={styles.generosFilmesFav}>
        <h1>Quais são seus gêneros de filmes favoritos?</h1>
      </div>
      <div className={styles.generos}>
        {generos.map((genero, index) => (
          <button
            key={index}
            onClick={() => toggleGenero(genero)}
            className={`${styles.generoButton} ${
              selectedGeneros.includes(genero) ? styles.selected : ""
            }`}
          >
            {genero}
          </button>
        ))}
      </div>
      <div className={styles.proximo}>
        <Link className={styles.nextButton} href='/timeline'>
          Próximo
        </Link>
      </div>
    </div>
  );
}
