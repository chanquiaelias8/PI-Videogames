import "./FormPage.css"
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default function FormPage() {
  const [formData, setFormData] = useState({
    id: 123,
    nombre: '',
    imagen: '',
    platforms: [],
    description: '',
    fechaLanzamiento: '',
    rating: 0,
    generos: [],
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario, como enviarlos a un servidor o almacenarlos localmente.
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>

        <label>
          Imagen:
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
          />
        </label>

        <label>
          Plataformas:
          <input
            type="text"
            name="platforms"
            value={formData.platforms}
            onChange={handleChange}
          />
        </label>

        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Fecha de lanzamiento:
          <input
            type="date"
            name="fechaLanzamiento"
            value={formData.fechaLanzamiento}
            onChange={handleChange}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </label>

        <label>
          Géneros:
          <input
            type="text"
            name="generos"
            value={formData.generos}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Crear videojuego</button>
      </form>
    </>
  );
}