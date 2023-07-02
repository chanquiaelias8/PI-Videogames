import './Menu.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// import actions
import { orderByName, orderByGenres, orderByPlatforms, filterCreated, cleanFilters } from '../../redux/actions/index';

export default function Menu(props) {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [alfabetic, setAlfabetic] = useState("sin orden");
  const [isChecked, setIsChecked] = useState(false);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelectedGenres) => {
      props.onPageChange(1)
      if (prevSelectedGenres.includes(genre)) {
        return prevSelectedGenres.filter((selectedGenre) => selectedGenre !== genre);
      } else {
        return [...prevSelectedGenres, genre];
      }
    });
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform((prevSelectedPlatforms) => {
      props.onPageChange(1)
      if (prevSelectedPlatforms.includes(platform)) {
        return prevSelectedPlatforms.filter((selectedPlatform) => selectedPlatform !== platform);
      } else {
        return [...prevSelectedPlatforms, platform];
      }
    })
  };

  const handleFilterByName = (index) => {
    setAlfabetic(index);
    if (index === 'sin orden') {
      dispatch(orderByName(index));
      if (selectedGenres.length > 0) {
        dispatch(orderByGenres(selectedGenres));
      }
      if (selectedPlatform.length > 0) {
        dispatch(orderByPlatforms(selectedPlatform));
      }
    }else{
      dispatch(orderByName(index));
    }
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);

    if (isChecked) {
      dispatch(filterCreated(isChecked));
    } else {
      dispatch(filterCreated(isChecked));
    }
  }

  const handleDeletedFilters = (event) => {
    event.preventDefault();
    setSelectedGenres([]);
    setSelectedPlatform([]);
    setAlfabetic("sin orden");
    setIsChecked(false);
    dispatch(cleanFilters());
  }

  useEffect(() => {
    dispatch(orderByGenres(selectedGenres));
  }, [selectedGenres, dispatch]);

  useEffect(() => {
    dispatch(orderByPlatforms(selectedPlatform));
  },[selectedPlatform, dispatch])

  return (
    <div className="menu-container">
      <h3>Menú</h3>
      <div className="menu-section">
        <h4>Order by genres:</h4>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={selectedGenres.includes(genre) ? 'selected' : ''}
            onClick={() => handleGenreChange(genre)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <div className="menu-section">
        <h4>Order by platforms:</h4>
        {platforms.map((platform) => (
          <button
            key={platform.id}
            className={selectedPlatform.includes(platform) ? 'selected' : ''}
            onClick={() => handlePlatformChange(platform)}
          >
            {platform.name}
          </button>
        ))}
      </div>

      <div className="menu-section">
        <h4>
          Order alphabetically:</h4>
        <button
          className={alfabetic === "sin orden" ? 'selected' : ''}
          onClick={() => handleFilterByName("sin orden")}
        >
          Sin orden
        </button>
        <button
          className={alfabetic === "A-Z" ? 'selected' : ''}
          onClick={() => handleFilterByName("A-Z")}
        >
          A-Z
        </button>
        <button
          className={alfabetic === "Z-A" ? 'selected' : ''}
          onClick={() => handleFilterByName("Z-A")}
        >
          Z-A
        </button>
      </div>

      <div className="menu-section">
        <h4>filter created:</h4>
        <label>
          <input type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Mostrar solo los creados</label>
      </div>

      <div className="menu-section">
        <h4>Resetear filtros</h4>
        <button
          id='deletedFilters'
          onClick={(event) => handleDeletedFilters(event)}
        >Delete filters</button>
      </div>
    </div>
  );
}