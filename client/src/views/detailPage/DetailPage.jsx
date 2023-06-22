import './DetailPage.css'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';

// import components
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Loader/Loader';

// import actions
import { get_Detail, clean_ID } from '../../redux/actions/index'

export default function DetailPage() {

  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    dispatch(get_Detail(id))
      .then(() => setLoading(false))
      .catch((error) => {
        // Manejar el error de la acción get_Detail
        console.error('Error en get_Detail:', error);
        setLoading(false);
      });
  
    return () => {
      setLoading(true);
      dispatch(clean_ID());
    };
  }, [dispatch, id]);

  return (
    <>
    <Navbar/>
    {loading? (<Loader/>): (
      typeof detail.id === "number"
      ?<div className='container'>
      <h2>Detalle del juego</h2>
        <div>
          <h3>{detail.name}</h3>
          <img src={detail.background_image} alt={detail.name} />
          <p>Plataformas: {detail.platforms.map((e, index) => index === detail.platforms.length-1?`${e.platform.name}.`:`${e.platform.name}, ` )}</p>
          <p>Descripción: {detail.description_raw}</p>
          <p>Fecha de lanzamiento: {detail.released}</p>
          <p>Rating: {detail.rating}</p>
          <p>Géneros: {detail.genres.map((e, index) =>detail.genres.length-1 === index? `${e.name}.` : `${e.name}, `)}</p>
        </div>
      </div>
      :<div className='container'>
      <h2>Detalle del juego</h2>
        <div>
          <h3>{}</h3>
          <img src={detail.background_image} alt={detail.name} />
          <p>Plataformas: {detail.platforms.map((e, index) => index === detail.platforms.length-1?`${e.name }.`:`${e.name}, ` )}</p>
          <p>Descripción: {detail.description}</p>
          <p>Fecha de lanzamiento: {detail.released}</p>
          <p>Rating: {detail.rating}</p>
          <p>Géneros: {detail.genres.map((e, index) =>detail.genres.length-1 === index? `${e.name}.` : `${e.name}, `)}</p>
        </div>
      </div>
    )}
    </>
  );
}
