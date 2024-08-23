import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/assets/cinemacth3-cropped.svg";
import Link from "next/link";

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
    <div className="containerGenero">
      <div className="logo-generos">
        <Image src={Logo} alt="logo" className="logo-tela-genero" />
      </div>
      <div className='generos-filmes-fav'>
        <h1>Quais são seus gêneros de filmes favoritos?</h1>
      </div>
      <div className="generos">
        {generos.map((genero, index) => (
          <button
            key={index}
            onClick={() => toggleGenero(genero)}
            className={`generoButton ${
              selectedGeneros.includes(genero) ? "selected" : ""
            }`}
          >
            {genero}
          </button>
        ))}
      </div>
      <div className='proximo'>
        <Link className="nextButton" href='/'>
          Proximo
        </Link>
      </div>
    </div>
  );
}
