const {getAllGenres} = require('../../controllers/Genre/getAllGenres');

const getGenresHandler = async(req,res)=>{
    try{
        let genresTotal = await getAllGenres();
        res.status(200).send(genresTotal);
    }catch(error){
        res.status(404).send('Gender not found')
    }
}

module.exports = {getGenresHandler}