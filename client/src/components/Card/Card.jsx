import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({id, image, name, genres}) { 
  return (
    <Link to={`/detail/${id}`} className="card">
      <img src={`${image}`} alt={name} />
      <h3>{name}</h3>
      <p>Género: {genres.map((genre, index) => index === genres.length-1?`${genre.name}.`:`${genre.name}, `)}</p>
    </Link>
  );
}
