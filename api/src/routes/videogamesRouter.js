const { Router } = require('express');
const {getVideogamesHandler} = require('../handlers/Videogame/getVideogamesHandler');
const {getVideogameHandler} = require('../handlers/Videogame/getVideogameHandler');
const {postVideogameHandler} = require ('../handlers/Videogame/postVideogameHandler');

const videogamesRouter = Router();

videogamesRouter.get('/', getVideogamesHandler); 

videogamesRouter.get('/:idVideogame', getVideogameHandler);

videogamesRouter.post('/', postVideogameHandler);

module.exports = {videogamesRouter};
