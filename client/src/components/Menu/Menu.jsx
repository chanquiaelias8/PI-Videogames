import './Menu.css';
import React ,{ useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

// import actions
import { orderByName } from '../../redux/actions/index'

export default function Menu (){
  
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  
  const [alfabetic, setAlfabetic] = useState("sin orden");
  
  const handleGenreChange = (index) => {
    if (selectedGenres.includes(index)) {
      setSelectedGenres(selectedGenres.filter((genreIndex) => genreIndex !== index));
    } else {
      setSelectedGenres([...selectedGenres, index]);
    }
  };

  const handlePlatformChange = (index) => {
    if (selectedPlatform.includes(index)) {
      setSelectedPlatform(selectedPlatform.filter((platforIndex) => platforIndex !== index));
    }else{
      setSelectedPlatform([...selectedPlatform, index]);
    }
  }

  const handleFilterByName = (index) =>{
    setAlfabetic(index)
    dispatch(orderByName(index));
  }

  return (
    <div className="menu-container">
      <h3>Menú</h3>
      <div className="menu-section">
        <h4>Ordenar por género:</h4>
          {
            genres.map((genre, index) => (
              <button
                key={`${genre.id}`}
                className={selectedGenres.includes(index) ? 'selected' : ''}
                onClick={() => handleGenreChange(index)}
              >
                {genre.name}
              </button>
            ))
          }
      </div>

      <div className="menu-section">
        <h4>Ordenar por plataforma:</h4>
          {
            platforms.map((platform, index) => (
              <button
                key={`${platform.id}`}
                className={selectedPlatform.includes(index) ? 'selected' : ''}
                onClick={() => handlePlatformChange(index)}
              >
                {platform.name}
              </button>
            ))
          }
      </div>

      <div className="menu-section">
        <h4>Ordenar alfabéticamente:</h4>
        <button
          className={alfabetic === "sin orden"? 'selected' : ''}
          onClick={() => handleFilterByName("sin orden")}
        >
          Sin order
        </button>
        <button
          className={alfabetic === "A-Z"? 'selected' : ''}
          onClick={() => handleFilterByName("A-Z")}
        >
          A-Z
        </button>
        <button
          className={alfabetic === "Z-A"? 'selected' : ''}
          onClick={() => handleFilterByName("Z-A")}
        >
          Z-A
        </button>
      </div>

      <div className="menu-section">
        <h4>Filtrar por creados:</h4>
        <input
          type="checkbox"
        />
        <label>Mostrar solo los creados</label>
      </div>
    </div>
  );
};