import React from 'react'
import './DetailPage.css'

import Navbar from '../../components/Navbar/Navbar';

export default function DetailPage({ id, nombre, imagen, platforms, description, fechaLanzamiento, rating, generos }) {
  
  const cardData = {
    id: 123,
    nombre: 'Nombre del juego',
    imagen: 'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png',
    platforms: ['Plataforma 1', 'Plataforma 2', 'Plataforma 3'],
    description: 'Descripción del juego',
    fechaLanzamiento: '2023-06-06',
    rating: 4.5,
    generos: ['Género 1', 'Género 2', 'Género 3'],
  };

  return (
    <>
    <Navbar/>
    <div className='container'>
      <h2>Detalle del juego</h2>
      <div>
        <h3>{cardData.nombre}</h3>
        <img src={cardData.imagen} alt={cardData.nombre} />
        <p>ID: {cardData.id}</p>
        <p>Plataformas: {cardData.platforms.join(', ')}</p>
        <p>Descripción: {cardData.description}</p>
        <p>Fecha de lanzamiento: {cardData.fechaLanzamiento}</p>
        <p>Rating: {cardData.rating}</p>
        <p>Géneros: {cardData.generos.join(', ')}</p>
      </div>
    </div>
    </>
  );
}
