import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({ image, name, genres, id }) {

  return (
    <Link to={`/detail/${id}`} className="card">
      <img src={'https://assets-prd.ignimgs.com/2021/12/30/36190303-image-7-1640880187142.png'} alt={name} />
      <h3>{name}</h3>
      <p>Género: {genres}</p>
    </Link>
  );
}