const { Genres } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { URL_GENRES, API_KEY } = process.env;

const get_Genres_DB = async () => {
	// Find or create genres in DB
    const [genres, created] = await Genres.findOrCreate({ where: {} });

    if (!created && genres.length === 0) {
      // No genres found in DB, fetch from API
      const apiGenres = (await axios.get(`${URL_GENRES}?key=${API_KEY}`)).data.results;
  
      // Create genres in DB using bulkCreate
      await Genres.bulkCreate(
        apiGenres.map((Genre) => ({ name: Genre.name }))
      );
    }
  
    // Retrieve all genres from DB
    const allGenres = await Genres.findAll();
    return allGenres;
};

module.exports = { get_Genres_DB };