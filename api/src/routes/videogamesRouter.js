const { Router } = require('express');
const {getVideogameHandler} = require('../handlers/Videogame/getVideogameHandler');
const {postVideogameHandler} = require ('../handlers/Videogame/postVideogameHandler');
const {validatePostVideogame} = require ('../utils');
const {getVideogameNameHandler} = require ('../handlers/Videogame/getVideogameNameHandler');

const videogamesRouter = Router();

videogamesRouter.get('/', getVideogameNameHandler);

videogamesRouter.get('/:idVideogame', getVideogameHandler);

videogamesRouter.post('/', validatePostVideogame, postVideogameHandler);

module.exports = {videogamesRouter};
