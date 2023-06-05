const { get_Genres_DB } = require("../controllers/genresControllers");


const get_Genres = async (req, res) => {
	try {
		const allGenres = await get_Genres_DB();
		res.status(200).json(allGenres);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
};

module.exports = {get_Genres};