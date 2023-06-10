import {
    // CREATE_VIDEOGAME,
    GET_PLATFORMS,
    GET_GENRES,
    GET_VIDEOGAMES,
    GET_DETAIL,
    CLEAN_ID
} from '../actions/index';

const initialState = {
    videogames: [],
    platforms: [],
    genres: [],
    detail: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CREATE_VIDEOGAME:
        //     const updatedVideogames = [...state.videogames];

        //     // const lastSubarrayIndex = updatedVideogames.length -1;
        //     // updatedVideogames[lastSubarrayIndex].length < 15
        //     // ?updatedVideogames[lastSubarrayIndex].push(action.payload)
        //     // :updatedVideogames.push([action.payload]);

        //     return {
        //         ...state,
        //         videogames: updatedVideogames
        //     };
        case CLEAN_ID:
			return {
				...state,
				videogameDetail: [],
			};
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
        return state;
    }
}

export default rootReducer;