import './HomePage.css';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import Modal from '../../components/Modal/Modal';

// Import actions
import { get_Genres, get_Platforms, get_Videogames, searchByName } from '../../redux/actions';

export default function HomePage() {
  const dispatch = useDispatch();

  const videogames = useSelector(state => state.videogames);
  const videogamesByName = useSelector(state => state.videogamesByName);

  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = (searchInput) => {
    setIsSearching(true);
    setSearchLoading(true);
    dispatch(searchByName(searchInput))
      .then(() => {
        setCurrentPage(1); // Reiniciar a la página 1 después de la búsqueda
      })
      .finally(() => {
        setSearchLoading(false);
      });
  };

  const handleResetSearch = () => {
    setIsSearching(false);
    setCurrentPage(1); // Reiniciar a la página 1
  };

  useEffect(() => {
    dispatch(get_Videogames())
      .then(() => {
        setLoading(false);
      });
    dispatch(get_Genres());
    dispatch(get_Platforms());
  }, [dispatch]);

  // Calcula el índice inicial y final de los objetos a mostrar en la página actual
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = isSearching ? videogamesByName.slice(startIndex, endIndex) : videogames.slice(startIndex, endIndex);

  // Calcula el número total de páginas
  const totalItems = isSearching ? videogamesByName.length : videogames.length;
  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar handleSubmit={handleSearch} handleResetSearch={handleResetSearch} isSearching={isSearching} />
      <div className="home-container">
        {loading || searchLoading ? (
          <Loader />
        ) : (
          <>
            <Menu onPageChange={handlePageChange} />
            <div className="content">
              <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
              <div className="card-content">
                {isSearching && currentData.length === 0 ? (
                  <Modal
                    title="Resultados Vacíos"
                    content="No se encontraron resultados para la búsqueda."
                  />
                ) : (
                  <Card games={currentData} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}