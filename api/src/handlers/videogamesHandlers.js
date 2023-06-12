const {
    get_All_Videogames,
    create_Videogame_DB,
    get_Videogame_ById } = require('../controllers/videogamesControllers.js')

const Get_Videogames_Handler = async (req, res) => {
    try {
        const response = await get_All_Videogames();
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const Get_Videogame_By_Id = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await get_Videogame_ById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const Post_Videogame = async (req, res) => {
    const {
        name,
        background_image,
        rating,
        description,
        platforms,
        genres,
        released } = req.body;

        let floatRating = parseFloat(rating);
        console.log(typeof floatRating);

    try {
        const response = await create_Videogame_DB(name, background_image, floatRating, description, platforms, genres, released);
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).send({"error": error.message})
    }
}


module.exports = {
    Get_Videogames_Handler, 
    Get_Videogame_By_Id, 
    Post_Videogame
}