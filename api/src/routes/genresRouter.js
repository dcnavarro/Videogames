const { Router } = require('express');
const {getGenresHandler} = require('../handlers/Genre/getGenresHandler');

const genresRouter = Router();

genresRouter.get('/', getGenresHandler);

module.exports = {genresRouter};