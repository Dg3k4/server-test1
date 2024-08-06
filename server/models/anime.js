const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Anime = sequelize.define("anime", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false, unique: true},
    subTitles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    img: {type: DataTypes.STRING},
    trailer: {type: DataTypes.STRING},
    rating: {type: DataTypes.FLOAT, defaultValue: 0},
    maxEpisode: {type: DataTypes.INTEGER},
    episodes: {type: DataTypes.INTEGER},
    source: {type: DataTypes.STRING},
    ageLimit: {type: DataTypes.STRING, validate: {isIn: [["0+", "6+", "12+", "16+", "18+"]]} },
    duration: {type: DataTypes.FLOAT},
    director: {type: DataTypes.ARRAY(DataTypes.STRING)},
    based: {type: DataTypes.STRING},
    originalAuthor: {type: DataTypes.ARRAY(DataTypes.STRING)},
    description: {type: DataTypes.TEXT},
    statusId: {type: DataTypes.INTEGER},
    releaseId: {type: DataTypes.INTEGER},
    typeId: {type: DataTypes.INTEGER},
    mpaaId: {type: DataTypes.INTEGER}
})

const VoiceoverAnime = sequelize.define("voiceover_anime", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false, unique: true},
    videoUrl: {type: DataTypes.STRING, allowNull: false},
    episode: {type: DataTypes.INTEGER, allowNull: false}
})

const LinkAnime = sequelize.define("link_anime", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    linkedAnimeId: {type: DataTypes.INTEGER}
})

const AnimeList = sequelize.define("anime_list", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const AnimeGenre = sequelize.define("anime_genre", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const AnimeGenreTitle = sequelize.define("anime_genre_title", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animeGenre: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const GenreStudio = sequelize.define("genre_studio", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const AnimeStudio = sequelize.define("anime_studio", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const AnimeStudioTitle = sequelize.define("anime_studio_title", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animeStudio: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const AnimeMPAA = sequelize.define("anime_mpaa", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animeMPAA: {type: DataTypes.STRING}
})
const AnimeType = sequelize.define("anime_type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animeType: {type: DataTypes.STRING, allowNull: false}
})
const AnimeRelease = sequelize.define("anime_release", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    releaseFrom: {type: DataTypes.DATE},
    releaseTo: {type: DataTypes.DATE}
})
const AnimeStatus = sequelize.define("anime_status", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    animeStatus: {type: DataTypes.STRING, allowNull: false}
})

Anime.hasOne(AnimeList, {foreignKey: "animeId", onDelete: "CASCADE"})
AnimeList.belongsTo(Anime, {foreignKey: "animeId"})

Anime.hasMany(VoiceoverAnime, {foreignKey: "animeId", onDelete: "CASCADE"})
VoiceoverAnime.belongsTo(Anime, {foreignKey: "animeId"})

Anime.hasMany(LinkAnime, {foreignKey: "animeId", onDelete: "CASCADE"})
LinkAnime.belongsTo(Anime, {foreignKey: "animeId"})

Anime.belongsToMany(AnimeGenreTitle, {through: AnimeGenre, foreignKey: "animeId", onDelete: "CASCADE"});
AnimeGenreTitle.belongsToMany(Anime, {through: AnimeGenre, foreignKey: "genreId", onDelete: "CASCADE"});

AnimeStudioTitle.belongsToMany(AnimeGenreTitle, {through: GenreStudio, foreignKey: "studioId"})
AnimeGenreTitle.belongsToMany(AnimeStudioTitle, {through: GenreStudio, foreignKey: "genreId"})

Anime.belongsToMany(AnimeStudioTitle, {through: AnimeStudio, foreignKey: "animeId", onDelete: "CASCADE"})
AnimeStudioTitle.belongsToMany(Anime, {through: AnimeStudio, foreignKey: "studioId", onDelete: "CASCADE"})

Anime.hasOne(AnimeMPAA, {foreignKey: "animeId", onDelete: "CASCADE"})
AnimeMPAA.belongsTo(Anime, {foreignKey: "animeId"})

Anime.hasOne(AnimeType, {foreignKey: "animeId", onDelete: "CASCADE"})
AnimeType.belongsTo(Anime, {foreignKey: "animeId"})

Anime.hasOne(AnimeRelease, {foreignKey: "animeId", onDelete: "CASCADE"})
AnimeRelease.belongsTo(Anime, {foreignKey: "animeId"})

Anime.hasOne(AnimeStatus, {foreignKey: "animeId", onDelete: "CASCADE"})
AnimeStatus.belongsTo(Anime, {foreignKey: "animeId"})

module.exports = {
    Anime,
    AnimeList,
    LinkAnime,
    VoiceoverAnime,
    AnimeGenreTitle,
    AnimeStudioTitle,
    AnimeStatus,
    AnimeType,
    AnimeRelease,
    AnimeMPAA,
}