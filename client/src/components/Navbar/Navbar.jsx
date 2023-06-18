import './Navbar.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Navbar = ({ handleSubmit, handleResetSearch, isSearching }) => {

  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const [textButton, setTextButton] = useState('Search');
  const [showModal, setShowModal] = useState(false);

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (textButton === 'Search') {
      if (searchInput === '') {
        setShowModal(true);
      }else{
        handleSubmit(searchInput);
        setTextButton('Reset Search')
      }
    }else if(textButton ==='Reset Search'){
      handleResetSearch();
      setTextButton('Search');
      setSearchInput('')
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <nav>
      <div className="navbar">
        <h1>Nombre de tu Aplicación</h1>
        <div className="nav-buttons">
          <form className="search-form" onSubmit={handleFormSubmit}>
            <input
              type="search"
              placeholder="Search by name"
              value={searchInput}
              onChange={handleInputChange}
            />
            <button type="submit">
              {isSearching ? textButton : textButton}
            </button>
          </form>
        </div>
        {history.location.pathname === '/home' ? (
          <Link to="/createVideogame" className="nav-button">
            Create Videogame
          </Link>
        ) : (
          <Link to="/home" className="nav-button">
            Home
          </Link>
        )}
      </div>

      {showModal && (
        <Modal
          title="Input vacio"
          onClose={handleCloseModal}
        >
          <p>El campo de búsqueda está vacío. Por favor, ingresa un valor antes de buscar.</p>
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;