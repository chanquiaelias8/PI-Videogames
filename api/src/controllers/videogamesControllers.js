const axios = require('axios')
require("dotenv").config();
const { Videogames } = require('../db');


const {
    API_KEY,
    URL
} = process.env;

const get_Videogame_Api = async () => {
    let api = (await axios.get(`${URL}?key=${API_KEY}`)).data;
	let games = [];
	for (let i = 0; i < 5; i++) {
		games.push(...api.results);
		api = (await axios.get(api.next)).data;
	}

    let response = games.map(e => {
        return {
            id: e.id,
		    name: e.name,
		    background_image: e.background_image,
		    released: e.released,
		    rating: e.rating,
		    description: e.description,
		    platforms: e.platforms.map((e) => {
			    return {
				    id: e.platform.id,
				    name: e.platform.name,
			    };
		    }),
            genres: e.genres.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                };
            }),
            created: false,
        }
    })

    return response;
}

const create_Videogame_DB = async (name, background_image, rating, description, platforms, genres, released) => {
    const newVideogame = await Videogames.create({ name, background_image, rating, description, platforms, genres, released });
    return newVideogame;
}

const get_Videogame_DB = async () => {
    const videogamesDB = Videogames.findAll()
    return videogamesDB;
}

// 
const get_Videogame_ById = async (id) => {
    if (isNaN(id)) {
        let response = await Videogames.findByPk(id);
        return response
    }else{
        // let videogames = await get_Videogame_Api();
        let videogame = (await axios(`${URL}/${id}?key=${API_KEY}`)).data;
        return videogame
    }
}

const get_All_Videogames = async (name) => {
  let allVideogames = await get_Videogame_Api();
  allVideogames = allVideogames.concat(await get_Videogame_DB());
  if (name) {
    let filterVideogames = allVideogames.filter(videogame => videogame.name.toLowerCase().includes(name.toLowerCase()));
    console.log(filterVideogames);
    if (filterVideogames.length) {
      return filterVideogames.slice(0, 15); // Retorna los primeros 15 videojuegos que coincidan con el nombre
    }
  }
  return allVideogames;
}

module.exports = {
    create_Videogame_DB,
    get_Videogame_DB,
    get_Videogame_ById,
    get_Videogame_Api,
    get_All_Videogames
}