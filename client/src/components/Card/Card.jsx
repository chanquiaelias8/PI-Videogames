import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({games}) {
  // console.log(games);
  return (
    <div className="card-list">
    {
      games.map(game => (
        <Link to={`/detail/${game.id}`} key={game.id} className="card">
      <img src={`${game.background_image}`} alt={game.name} />
      <h3>{game.name}</h3>
      <p>Género: {game.genres.map((genre, index) => index === game.genres.length-1?`${genre.name}.`:`${genre.name}, `)}</p>
      </Link>
      ))
    }
    </div>
  );
}
