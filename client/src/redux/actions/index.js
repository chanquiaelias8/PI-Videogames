import axios from 'axios';

// EXPORTAR TODAS LAS CONSTANTES DE FUNCIONES
// export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_ID = "CLEAN_ID";

// EXPORTAR LAS FUNCIONES

// export function createVideogame(data) {
//     console.log('data:', data);
//     return async (dispatch) => {
//         try {
//             const response = await (axios.post('http://localhost:3001/videogames', data)).data;
//             dispatch({type: CREATE_VIDEOGAME, payload: response});
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

export const clean_ID = () => {
	return { type: CLEAN_ID };
};

export function get_Detail(id){
    return async (dispatch) => {
        const response = (await axios(`http://localhost:3001/videogames/${id}`)).data;
        return dispatch({
            type: "GET_DETAIL",
            payload: response
        })
    }
}

export function get_Videogames(){
    return async (dispatch) => {
        const response = (await axios('http://localhost:3001/videogames')).data;
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: response
        })
    }
}

export function get_Genres(){
    return async (dispatch) => {
        const response = (await axios('http://localhost:3001/genres')).data;
        return dispatch({
            type: "GET_GENRES",
            payload: response
        })
    }   
}

export function get_Platforms(){
    return async (dispatch) =>{
        const response = (await axios('http://localhost:3001/platforms')).data;
        return dispatch({
            type: "GET_PLATFORMS",
            payload: response
        })
    }
}