import './HomePage.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// imports components
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

// import actions
import { get_Genres, get_Platforms, get_Videogames } from '../../redux/actions';

export default function HomePage() {
  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const videogames = useSelector(state => state.videogames);
  
  useEffect(() => {
    dispatch(get_Videogames())
    dispatch(get_Genres())
    dispatch(get_Platforms()).then(() => setLoading(false));
    return () => {
			setLoading(true);
		};
  },[dispatch])

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula el índice inicial y final de los objetos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = videogames.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div>
      <Navbar />
      {loading? (<Loader/>) : (
        <div className="home-container">
          <Menu />
          <div className="content">
            <Pagination 
              currentPage={currentPage}
              totalPages={Math.ceil(videogames.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
            <div className="card-list">
              {
                currentData.map((videogame, index)=> (
                  <Card key={index} id={videogame.id} image={videogame.background_image} name={videogame.name} genres={videogame.genres} />
                ))
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
/*
  
*/