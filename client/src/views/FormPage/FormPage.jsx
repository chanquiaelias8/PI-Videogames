import './FormPage.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';


// import components
import Navbar from '../../components/Navbar/Navbar';

// import actions
import { createVideogame } from '../../redux/actions/index';

export default function FormPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const videogames = useSelector(state => state.videogames);
  const platforms = useSelector(state => state.platforms);
  const genres = useSelector(state => state.genres);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    background_image: '',
    rating: 0,
    description: '',
    platforms: [],
    genres: [],
    released: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();

    // Validación de datos
    const validationErrors = {};

    if (formData.name.trim() === '') {
      validationErrors.name = 'El nombre es requerido.';
    }

    if (formData.name.length > 30) {
      validationErrors.name = 'Superaste los 30 caracteres permitidos'
    }

    if (formData.background_image.trim() === '') {
      validationErrors.background_image = 'La URL de la imagen de fondo es requerida.';
    }

    if (formData.description.trim() === '') {
      validationErrors.description = 'La descripción es requerida.';
    }

    if (formData.released === '') {
      validationErrors.released = 'La fecha de lanzamiento es requerida.';
    }

    if (formData.rating < 1 || formData.rating > 10) {
      validationErrors.rating = 'El rating debe ser un número entre 1 y 10.';
    }

    if (formData.platforms.length === 0) {
      validationErrors.platforms = 'Debes seleccionar al menos una plataforma.';
    }

    if (formData.genres.length === 0) {
      validationErrors.genres = 'Debes seleccionar al menos un género.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {

      let filter = videogames.filter(game => game.name.toLowerCase() === formData.name.toLowerCase());
      if (filter.length) {
        setShowModal(true);
      }else{
        const videogameCreated = dispatch(createVideogame(formData));
        console.log(`response: ${videogameCreated}`);
        if (videogameCreated) {
          history.push('/home');
        }
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlatformChange = (event, platform) => {
    event.preventDefault();
    const { id, name } = platform;

    if (formData.platforms.find(p => p.id === id)) {
      setFormData(prevData => ({
        ...prevData,
        platforms: prevData.platforms.filter(p => p.id !== id),
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        platforms: [...prevData.platforms, { id, name }],
      }));
    }
  };

  const handleGenreChange = (event, genre) => {
    event.preventDefault();
    const { id, name } = genre;

    if (formData.genres.find(g => g.id === id)) {
      setFormData(prevData => ({
        ...prevData,
        genres: prevData.genres.filter(g => g.id !== id),
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        genres: [...prevData.genres, { id, name }],
      }));
    }
  };

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-left">
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </label>

            <label>
              Imagen de fondo:
              <input
                type="text"
                name="background_image"
                value={formData.background_image}
                onChange={handleChange}
              />
              {errors.background_image && (
                <span className="error-message">{errors.background_image}</span>
              )}
            </label>

            <label>
              Descripción:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </label>

            <label>
              Fecha de lanzamiento:
              <input
                type="date"
                name="released"
                value={formData.released}
                onChange={handleChange}
              />
              {errors.released && <span className="error-message">{errors.released}</span>}
            </label>

            <label>
              Rating:
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
              {errors.rating && <span className="error-message">{errors.rating}</span>}
            </label>
          </div>

          <div className="form-right">
            <label>Plataformas:</label>
            <div className="label">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  className={formData.platforms.find(p => p.id === platform.id) ? 'selected' : ''}
                  onClick={event => handlePlatformChange(event, platform)}
                >
                  {platform.name}
                </button>
              ))}
              {errors.platforms && <span className="error-message">{errors.platforms}</span>}
            </div>

            <label>Géneros:</label>
            <div className="label">
              {genres.map(genre => (
                <button
                  key={genre.id}
                  className={formData.genres.find(g => g.id === genre.id) ? 'selected' : ''}
                  onClick={event => handleGenreChange(event, genre)}
                >
                  {genre.name}
                </button>
              ))}
              {errors.genres && <span className="error-message">{errors.genres}</span>}
            </div>
          </div>

          <button id="create" type="submit">
            Crear videojuego
          </button>
        </form>
      </div>

      {showModal && (
        <Modal
          title="Input vacio"
          onClose={handleCloseModal}
        >
          <p>Ya hay un videojuego creado con ese nombre.</p>
        </Modal>
      )}
    </>
  );
}