const {
    get_Platforms_DB
} = require('../controllers/platformsControllers.js')

const get_Platforms = async (req, res) => {
    try {
        const response = await get_Platforms_DB();
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    get_Platforms
}