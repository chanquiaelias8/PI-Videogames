const { get_Videogame_Api } = require('../controllers/videogamesControllers')
const { Platforms } = require('../db');

const get_Platforms_DB = async () => {
    const ApiVideogames = await get_Videogame_Api();

    const mapPlatforms = ApiVideogames.map(game => game.platforms);

    const mergedArray = mapPlatforms.reduce((accumulator, currentArray) => {
        currentArray.forEach(item => {
        const existingItem = accumulator.find(i => i.id === item.id);
        if (!existingItem) {
            accumulator.push(item);
        }
        });
        return accumulator;
    }, []);

    const results = await Promise.all(
        mergedArray.map(item =>
        Platforms.findOrCreate({
            where: { id: item.id },
            defaults: item
        })
        )
    );

    const createdPlatforms = results.map(([platform, created]) => platform.get({ plain: true }));
    // console.log('Plataformas guardadas en la base de datos correctamente.');
    // console.log('Plataformas creadas o encontradas:', createdPlatforms);
    return createdPlatforms; // Retorna las plataformas
}

module.exports = {
    get_Platforms_DB
}
