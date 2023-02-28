const { Router } = require('express');
const {getVideogameHandler} = require('../handlers/Videogame/getVideogameHandler');
const {postVideogameHandler} = require ('../handlers/Videogame/postVideogameHandler');
const {validatePostVideogame} = require ('../utils');
const {getVideogameNameHandler} = require ('../handlers/Videogame/getVideogameNameHandler');

const videogamesRouter = Router();

videogamesRouter.get('/', getVideogameNameHandler);

videogamesRouter.post('/', validatePostVideogame, postVideogameHandler);

videogamesRouter.get('/:idVideogame', getVideogameHandler);

module.exports = {videogamesRouter};
