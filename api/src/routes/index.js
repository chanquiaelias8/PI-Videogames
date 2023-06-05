const { Router } = require('express');
// Importar todos los routers;
const videogamesRouter = require('./videogamesRoutes.js');
const genresRouter = require('./genresRoutes.js');

const router = Router();

// Configurar los routers
router.use('/videogames', videogamesRouter);
router.use('/genres', genresRouter);


module.exports = router;
