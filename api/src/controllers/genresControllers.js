const { Genres } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { URL_GENRES, API_KEY } = process.env;

const get_Genres_DB = async () => {
  // All genres from API
	let apiGenres = await axios.get(`${URL_GENRES}?key=${API_KEY}`);
	apiGenres = apiGenres.data.results;
	// Add to DB if not exits
	apiGenres.forEach(async (G) => await Genres.findOrCreate({ where: { name: G.name } }));
	return await Genres.findAll();
};  

module.exports = { get_Genres_DB };

