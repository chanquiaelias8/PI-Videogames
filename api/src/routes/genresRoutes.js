const Router = require('express');

const {get_Genres} = require('../handlers/genresHandlers');

const genresRouter = Router();

genresRouter.get('/',get_Genres);

module.exports = genresRouter;