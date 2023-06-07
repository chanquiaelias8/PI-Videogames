import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ onGenreChange, onSortChange, onFilterChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [filterByCreated, setFilterByCreated] = useState(false);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    onGenreChange(genre);
  };

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
    onSortChange(sort);
  };

  const handleFilterChange = () => {
    setFilterByCreated(!filterByCreated);
    onFilterChange(!filterByCreated);
  };

  return (
    <div className="menu-container">
      <h3>Menú</h3>
      
      <div className="menu-section">
        <h4>Ordenar por género:</h4>
        <button
          className={selectedGenre === 'Acción' ? 'selected' : ''}
          onClick={() => handleGenreChange('Acción')}
        >
          Acción
        </button>
        <button
          className={selectedGenre === 'Comedia' ? 'selected' : ''}
          onClick={() => handleGenreChange('Comedia')}
        >
          Comedia
        </button>
        <button
          className={selectedGenre === 'Drama' ? 'selected' : ''}
          onClick={() => handleGenreChange('Drama')}
        >
          Drama
        </button>
        {/* Agrega más botones para otros géneros */}
      </div>

      <div className="menu-section">
        <h4>Ordenar alfabéticamente:</h4>
        <button
          className={selectedSort === 'A-Z' ? 'selected' : ''}
          onClick={() => handleSortChange('A-Z')}
        >
          A-Z
        </button>
        <button
          className={selectedSort === 'Z-A' ? 'selected' : ''}
          onClick={() => handleSortChange('Z-A')}
        >
          Z-A
        </button>
      </div>

      <div className="menu-section">
        <h4>Filtrar por creados:</h4>
        <input
          type="checkbox"
          checked={filterByCreated}
          onChange={handleFilterChange}
        />
        <label>Mostrar solo los creados</label>
      </div>
    </div>
  );
};

export default Menu;