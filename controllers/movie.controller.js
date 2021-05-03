const Movie = require('../models/movie.model')

exports.test = (req, res) => res.send('Greetings from the test controller!')

exports.movie_create = (req, res) => {
    let movie = new Movie(
        {
            name: req.body.name,
            year: req.body.year
        }
    )
    movie.save(err => err ? next(err) : res.send('Movie posted successfully.'))
}

exports.movie_details = (req, res) => Movie.findById(req.params.id, 
    (err, movie) => err ? err : res.send(movie))

exports.movie_update = (req, res) => Movie.findByIdAndUpdate(req.params.id, 
    {$set: req.body}, (err, movie) => err ? next(err) : res.send('Movie updated.'))

exports.movie_delete = (req, res, next) => Movie.findByIdAndRemove(req.params.id,
    err => err ? next(err) : res.send('Deleted successfully!')) 