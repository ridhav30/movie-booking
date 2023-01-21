const theatereModel = require('../model/teatereModel')
const responseBodyHelper = require('../helpers/responseHelpers')
let theatereController = {
    async fnAddingTheatere(req, res) {
        try {
            let { name, place, district, type } = req.body
            let theatere = new theatereModel(name, place, district, type)
            let addedTheatere = await theatere.fnAddTheatere()
            if (addedTheatere.acknowledged) {
                let responseBody = new responseBodyHelper(200, addedTheatere, true, 'successfully Added')
                return res.send(responseBody)
            }
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            return res.send(responseBody)
        } catch (error) {
            console.log(error);
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            res.send(responseBody)
        }


    },
    async fnAddingMovie(req, res) {
        try {
            let { name, director, actor, actress, image } = req.body
            let addedMovie = await theatereModel.fnAddMovies(name, director, actor, actress, image)
            if (addedMovie.acknowledged) {
                let responseBody = new responseBodyHelper(200, addedMovie, true, 'successfully Added')
                return res.send(responseBody)
            }
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            return res.send(responseBody)
        } catch (error) {
            console.log(error);
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            res.send(responseBody)
        }


    },
    async fnAddingShow(req, res) {
        try {
            let { name, time, movie, place } = req.body
            let addedShow = await theatereModel.fnAddShows(name, time, movie, place)
            if (addedShow.acknowledged) {
                let responseBody = new responseBodyHelper(200, addedShow, true, 'successfully Added')
                return res.send(responseBody)
            }
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            return res.send(responseBody)
        } catch (error) {
            console.log(error);
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            res.send(responseBody)
        }


    },
    async fnUpdatingShow(req, res) {
        try {
            let { name, time, movie, theatere, place, id } = req.body
            let updatedShow = await theatereModel.fnUpdtateShows(name, time, movie, theatere, place, id)
            if (updatedShow.acknowledged) {
                let responseBody = new responseBodyHelper(200, updatedShow, true, 'successfully Updated')
                return res.send(responseBody)
            }
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            return res.send(responseBody)
        } catch (error) {
            console.log(error);
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            res.send(responseBody)
        }


    },
    async fnShowsByMoviesName(req, res) {
        try {
            let show = await theatereModel.fnListShowsByMoviesName(req.params.movie)
            let responseBody = new responseBodyHelper(200, show, true, 'success')
            res.send(responseBody)
        } catch (error) {
            console.log(error);
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            res.send(responseBody)
        }


    },
    async fnShowsByLocations(req, res) {
        try {
            let show = await theatereModel.fnListShowsByLocations(req.params.location)
            let responseBody = new responseBodyHelper(200, show, true, 'success')
            res.send(responseBody)
        } catch (error) {
            console.log(error);
            let responseBody = new responseBodyHelper(500, [], false, 'failed')
            res.send(responseBody)
        }


    }

}
module.exports = theatereController