import {
    CREATE_VIDEOGAME,
    GET_PLATFORMS,
    GET_GENRES,
    GET_VIDEOGAMES,
    GET_DETAIL,
    CLEAN_ID,
    SEARCHBYNAME,
  } from '../actions/index';
  
  const initialState = {
    videogames: [],
    videogamesByName: [],
    platforms: [],
    genres: [],
    detail: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCHBYNAME:
        return {
          ...state,
          videogamesByName: action.payload,
        };
      case CREATE_VIDEOGAME:
        const updatedVideogames = [...state.videogames];
        return {
          ...state,
          videogames: updatedVideogames,
        };
      case CLEAN_ID:
        return {
          ...state,
          detail: [],
        };
      case GET_DETAIL:
        return {
          ...state,
          detail: action.payload,
        };
      case GET_VIDEOGAMES:
        return {
          ...state,
          videogames: action.payload,
          videogameByName: action.payload,
        };
      case GET_PLATFORMS:
        return {
          ...state,
          platforms: action.payload,
        };
      case GET_GENRES:
        return {
          ...state,
          genres: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;