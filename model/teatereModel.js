const { connect: connection, ObjectId } = require('../connection/dbConnection')
class Theatere {
    constructor(name, place, district, type) {
        this.name = name
        this.place = place
        this.district = district
        this.type = type
    }
    async fnAddTheatere() {
        const date = new Date();
        const indianDateTime = date.toLocaleString("en-IN");
        const addTheatere = {
            name: this.name,
            place: this.place,
            district: this.district,
            type: this.type,
            created_at: indianDateTime,
            updated_at: indianDateTime
        }
        let addedTheatere = connection.db('admin').collection('theateres').insertOne(addTheatere)
        return addedTheatere
    }
    static async fnAddMovies(name, director, actor, actress, image) {
        const date = new Date();
        const indianDateTime = date.toLocaleString("en-IN");
        const addMovie = {
            name: name,
            director: director,
            actor: actor,
            actress: actress,
            image: image,
            created_at: indianDateTime,
            updated_at: indianDateTime
        }
        let addedMovie = connection.db('admin').collection('movies').insertOne(addMovie)
        return addedMovie
    }
    static async fnAddShows(name, time, movie, place) {
        const date = new Date();
        const indianDateTime = date.toLocaleString("en-IN");
        const addShows = {
            name: name,
            time: time,
            movie: movie,
            place: place,
            created_at: indianDateTime,
            updated_at: indianDateTime
        }
        let addedShows = connection.db('admin').collection('shows').insertOne(addShows)
        return addedShows
    }
    static async fnUpdtateShows(name, time, movie, place, id) {
        const date = new Date();
        const indianDateTime = date.toLocaleString("en-IN");
        const updateShows = {
            name: name,
            time: time,
            movie: movie,
            place: place,
            updated_at: indianDateTime
        }
        let updatedShows = connection.db('admin').collection('shows').updateOne({ _id: ObjectId(id) }, { $set: updateShows })
        return updatedShows
    }
    static async fnListShowsByMoviesName(movie) {
        let listShows = connection.db('admin').collection('shows').aggregate([
            {
                $lookup: {
                    from: "movies",
                    localField: "movie",
                    foreignField: "name",
                    as: "movies_info",
                    pipeline: [
                        {
                            $match: {
                                name: movie
                            }
                        }
                    ]
                }
                
            },
            {
                $match: { "movies_info": { $ne: [] } }
            }
        ]).toArray()
        return listShows
    }
    static async fnListShowsByLocations(location) {
        let listShows = connection.db('admin').collection('shows').aggregate([
            {
                $lookup: {
                    from: "theateres",
                    localField: "place",
                    foreignField: "place",
                    as: "locations",
                    pipeline: [
                        {
                            $match: {
                                place: location
                            }
                        }
                    ]
                }
                
            },
            {
                $match: { "locations": { $ne: [] } }
            }
        ]).toArray()
        return listShows
    }
}
module.exports = Theatere
