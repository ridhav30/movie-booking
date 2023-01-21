var express = require('express');
const { fnAddingTheatere,
    fnAddingMovie,
    fnAddingShow, 
    fnUpdatingShow,
    fnShowsByMoviesName,
    fnShowsByLocations} = require('../controllers/theatereController');
var router = express.Router();

router.post('/add-theatere', fnAddingTheatere)
router.post('/add-movie', fnAddingMovie)
router.post('/add-show', fnAddingShow)
router.post('/rescheduling-booking', fnUpdatingShow)
router.get('/book-ticket-movie-name/:movie', fnShowsByMoviesName)
router.get('/book-ticket-location/:location', fnShowsByLocations)
module.exports = router;