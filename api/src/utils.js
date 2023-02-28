
const validatePostVideogame = (req, res, next) =>{
    
    const {id, name, about, platforms, image, releaseDate, rating, genreId} = req.body;

    if(!id) return res.status(404).json({error: 'Required information is missing: id'});
    if(!name) return res.status(404).json({error: 'Required information is missing: name'});
    if(!about) return res.status(404).json({error: 'Required information is missing: about'});
    if(!platforms) return res.status(404).json({error: 'Required information is missing: platforms'});
    if(!image) return res.status(404).json({error: 'Required information is missing: image'});
    if(!releaseDate) res.status(404).json({error: 'Required information is missing: releaseDate'});
    if(!rating) return res.status(404).json({error: 'Required information is missing: rating'});
    if(!genreId) return res.status(404).json({error: 'Required information is missing: genreId'});

    next();
};



module.exports ={
    validatePostVideogame,

}