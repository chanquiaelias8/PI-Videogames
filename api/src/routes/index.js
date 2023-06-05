const { Router } = require('express');
// Importar todos los routers;
const videogamesRouter = require('./videogamesRoutes.js');
const genresRouter = require('./genresRoutes.js');
const platformsRouter = require('./platformsRoutes.js');

const router = Router();

// Configurar los routers
router.use('/videogames', videogamesRouter);
router.use('/genres', genresRouter);
router.use('/platforms', platformsRouter);


module.exports = router;
