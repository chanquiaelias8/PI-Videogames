const Router = require('express');

const {get_Platforms} = require('../handlers/platformsHandlers.js');

const platformsRouter = Router();

platformsRouter.get('/', get_Platforms);

module.exports = platformsRouter;