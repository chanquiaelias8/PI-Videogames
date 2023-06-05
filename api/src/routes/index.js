const { Router } = require('express');
// Importar todos los routers;
const videogamesRouter = require('./videogamesRoutes.js');

const router = Router();

// Configurar los routers
router.use('/videogames', videogamesRouter);


module.exports = router;
