const Router = require('express')

const {
    Get_Videogames_Handler, 
    Get_Videogame_By_Id, 
    Post_Videogame  } = require('../handlers/videogamesHandlers')

const videogamesRouter = Router();

videogamesRouter
    .get('/', Get_Videogames_Handler)
    .get('/:id', Get_Videogame_By_Id)
    .post('/', Post_Videogame);


module.exports = videogamesRouter;