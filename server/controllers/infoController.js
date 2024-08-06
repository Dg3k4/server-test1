const {AnimeRelease, AnimeGenreTitle, AnimeStatus, AnimeList, AnimeMPAA, AnimeStudioTitle, AnimeType, AnimeGenre} = require("../models/anime")
const ApiError = require("../error/ApiError")

class InfoController {
    async createStatus(req, res, next) {
        try {
            const animeStatus = req.body
            const create = await AnimeStatus.create(animeStatus)
            return  res.json({message: create})
        } catch (e) {
            res.json(e)
        }
    }

    async createRelease(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async createType(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async createMPAA(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async createGenre(req, res, next) {
        try {
            const animeGenre = req.body
            const createGenre = await AnimeGenreTitle.create(animeGenre)

            return res.json(createGenre)
        } catch (e) {
            res.json(e)
        }
    }

    async createStudio(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async giveStatuses(req, res, next) {
        try {
            const statuses = await AnimeStatus.findAll()
            return res.json(statuses)
        } catch (e) {
            return res.json(e)
        }
    }

    async giveGenres(req, res, next) {
        try {
            const genres = await AnimeGenreTitle.findAll()
            return res.json(genres)
        } catch (e) {
            res.json(e)
        }
    }

    async giveStatuses(req, res, next) {
        try {
            const statuses = await AnimeStatus.findAll()
            return res.json(statuses)
        } catch (e) {
            next(res.json(e))
        }
    }

    async giveStatuses(req, res, next) {
        try {
            const statuses = await AnimeStatus.findAll()
            return res.json(statuses)
        } catch (e) {
            return res.json(e)
        }
    }

    async giveStatuses(req, res, next) {
        try {
            const statuses = await AnimeStatus.findAll()
            return res.json(statuses)
        } catch (e) {
            return res.json(e)
        }
    }

    async giveStatuses(req, res, next) {
        try {
            const statuses = await AnimeStatus.findAll()
            return res.json(statuses)
        } catch (e) {
            return res.json(e)
        }
    }
}

module.exports = new InfoController()