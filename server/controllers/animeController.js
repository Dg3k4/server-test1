const {Anime, AnimeGenre, AnimeRelease, AnimeGenreTitle, AnimeStatus, AnimeList, AnimeMPAA, AnimeStudioTitle, AnimeType} = require("../models/anime")
const ApiError = require("../error/ApiError")

/* Найди способ присваивать айдишники жанров для аниме, для его создания. */

class AnimeController {
    async createAnime(req, res, next) {
        try {
            const {
                title,
                subTitles,
                img,
                trailer,
                rating,
                maxEpisode,
                episodes,
                source,
                ageLimit,
                duration,
                director,
                based,
                originalAuthor,
                description,
                statusId,
                releaseId,
                typeId,
                mpaaId,
                genreIds,
                studioIds
            } = req.body;

            // Создаем запись в таблице Anime
            const anime = await Anime.create({
                title,
                subTitles,
                img,
                trailer,
                rating,
                maxEpisode,
                episodes,
                source,
                ageLimit,
                duration,
                director,
                based,
                originalAuthor,
                description,
                statusId,
                releaseId,
                typeId,
                mpaaId
            });

            // Ассоциируем жанры
            if (genreIds && genreIds.length > 0) {
                const genres = await AnimeGenreTitle.findAll({
                    where: { id: genreIds }
                });
                await anime.addAnimeGenreTitles(genres);
            }

            // Ассоциируем студии
            if (studioIds && studioIds.length > 0) {
                const studios = await AnimeStudioTitle.findAll({
                    where: { id: studioIds }
                });
                await anime.addAnimeStudioTitles(studios);
            }

            return res.status(201).json(anime);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Ошибка создания аниме" });
        }
    }

    async gimmiAll(req, res, next) {
        try {
            const anime = await Anime.findAll();
            res.json(anime);
        } catch (e) {
            res.json(e)
        }
    }

    async giveOne(req, res, next) {

    }

    async addGenreToAnime(req, res, next) {
        try {
            const {animeId} = req.params
            const {genres} = req.body

            const anime = await Anime.findByPk(animeId)
            if (!anime) {
                return res.status(404).json({message: "Anime not found"})
            }

            res.status(200).json({ message: "Genres added to anime successfully" });
        } catch (e) {
            res.json(e)
        }
    }
}

module.exports = new AnimeController()
