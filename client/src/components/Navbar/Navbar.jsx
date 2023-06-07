import './Navbar.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la búsqueda, por ejemplo, hacer una solicitud a la API o realizar alguna acción específica.
    console.log('Búsqueda realizada:', searchValue);
  }


  return (
    <nav>
      <div className="navbar">
        <h1>Nombre de tu Aplicación</h1>
        <div className="nav-buttons">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        {
          history.location.pathname === "/home"
            ?<Link to="/createVideogame" className="nav-button">Create Videogame</Link>
            :<Link to="/home" className="nav-button">Home</Link>
        }
      </div>
    </nav>
  );
}

export default Navbar;