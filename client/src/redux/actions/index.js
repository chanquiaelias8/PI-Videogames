import axios from 'axios';

export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAN_ID = 'CLEAN_ID';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const SET_GENRE_FILTER = 'SET_GENRE_FILTER'
export const SET_PLATFORMS_FILTER = 'SET_PLATFORMS_FILTER';
export const SELECT_CREATED = 'SELECT_CREATED';

export const filterCreated = (check) => {
  return {
    type: SELECT_CREATED,
    payload: check
  }
}

export const orderByPlatforms = (platforms) => {
  return {
    type: SET_PLATFORMS_FILTER,
    payload: platforms
  };
}

export const orderByGenres = (genres) => {
  return {
    type: SET_GENRE_FILTER,
    payload: genres,
  };
};

export const orderByName = (order) => {
	return { type: ORDER_BY_NAME, payload: order };
};

export function searchByName(name) {
  return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
      dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data,
      });
  };
}

export function createVideogame(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/videogames', data);
      dispatch({
        type: CREATE_VIDEOGAME,
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
}

export const clean_ID = () => {
  return { type: CLEAN_ID };
};

export function get_Detail(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames/${id}`);
      dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
}

export function get_Videogames() {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/videogames');
      dispatch({
        type: GET_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
}

export function get_Genres() {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/genres');
      dispatch({
        type: GET_GENRES,
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
}

export function get_Platforms() {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/platforms');
      dispatch({
        type: GET_PLATFORMS,
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
}