
import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/MovieSlider.module.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MovieSlider = () => {
  const movies = [
    {
      title: 'Wish: O Poder do Desejo',
      img: '/assets/wish.svg',
      rating: 4.5,
      genre: 'Ação',
      type: 'Filme',
    },
    {
      title: 'Todos Menos Você',
      img: '/assets/tmv.svg',
      rating: 4.5,
      genre: 'Ação',
      type: 'Filme',
    },
    {
      title: 'Bob Marley: One Love',
      img: '/assets/bob.svg',
      rating: 4.1,
      genre: 'Ação',
      type: 'Filme',
    },
    {
      title: 'Deadpool & Wolverine',
      img: '/assets/deadpool.svg',
      rating: 4.6,
      genre: 'Ação',
      type: 'Filme',
    },
    {
      title: 'Divertidamente 2',
      img: '/assets/divertidamente.svg',
      rating: 4.8,
      genre: 'Ação',
      type: 'Filme',
    },
    {
        title: 'A Menina que Roubava Livros',
        img: '/assets/menina.svg',
        rating: 4.5,
        genre: 'Drama',
        type: 'Filme',
      },
      {
        title: 'Avatar',
        img: '/assets/avatar.svg',
        rating: 4.7,
        genre: 'Ficção',
        type: 'Filme',
      },
      {
        title: 'O Hobbit',
        img: '/assets/hobbit.svg',
        rating: 4.8,
        genre: 'Fantasia',
        type: 'Filme',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.titulo} >Lançamentos</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className={styles.movieCard}>
            <img src={movie.img} alt={movie.title} className={styles.movieImage} />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <div className={styles.ratingAndInfo}>
              <div className={styles.ratingContainer}>
                <span className={styles.starEmoji}>⭐</span> 
                <span className={styles.ratingText}>{movie.rating}</span>
              </div>
              <span className={styles.separator}>|</span>
              <span className={styles.movieInfo}>
                {movie.genre} • {movie.type}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
