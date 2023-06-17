import {
    CREATE_VIDEOGAME,
    GET_PLATFORMS,
    GET_GENRES,
    GET_VIDEOGAMES,
    GET_DETAIL,
    CLEAN_ID,
    SEARCH_BY_NAME,
    ORDER_BY_NAME
  } from '../actions/index';
  
  const initialState = {
    originalVideogames: [],
    videogames: [],
    videogamesByName: [],
    platforms: [],
    genres: [],
    detail: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ORDER_BY_NAME:
        const flatVideogames = state.videogames.flat();

        if (action.payload === "sin orden") {
          return {
            ...state,
            videogames: [...state.originalVideogames]
          };
        }
      
        const orderName = [...flatVideogames].sort((a, b) => {
          if (action.payload === "A-Z") {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      
        return {
          ...state,
          videogames: orderName,
        };
      case SEARCH_BY_NAME:
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
          originalVideogames: action.payload
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