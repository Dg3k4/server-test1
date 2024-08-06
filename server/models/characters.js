const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const {Anime} = require("./anime");

const AnimeCharacters = sequelize.define("anime_characters", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    character: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT}
})

const CharactersActors = sequelize.define("charactersActors_actors", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Actor = sequelize.define("actor", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    japaneseName: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    birthday: {type: DataTypes.STRING},
    age: {type: DataTypes.INTEGER},
    career: {type: DataTypes.STRING}
})

const AnimeActors = sequelize.define("anime_actors", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Anime.hasMany(AnimeCharacters, {foreignKey: "animeId", onDelete: "CASCADE"})
AnimeCharacters.belongsTo(Anime, {foreignKey: "animeId"})

Anime.belongsToMany(Actor, {through: AnimeActors, foreignKey: "animeId", onDelete: "CASCADE"})
Actor.belongsToMany(Anime, {through: AnimeActors, foreignKey: "actorId"})

AnimeCharacters.belongsToMany(Actor, {through: CharactersActors, foreignKey: "characterId", onDelete: "CASCADE"})
Actor.belongsToMany(AnimeCharacters, {through: CharactersActors, foreignKey: "actorId", onDelete: "CASCADE"})

module.exports = {
    AnimeCharacters,
    AnimeActors,
    Actor,
    CharactersActors
}