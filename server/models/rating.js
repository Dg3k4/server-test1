const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const {User} = require("./user");
const {Anime} = require("./anime");

const Rating = sequelize.define("rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.FLOAT, validate: {min: 1, max: 10}, isFloat: true}
})

User.hasMany(Rating, {foreignKey: "userId"})
Rating.belongsTo(User, {foreignKey: "userId"})

Anime.hasMany(Rating, {foreignKey: "animeId", onDelete: "CASCADE"})
Rating.belongsTo(Anime, {foreignKey: "animeId"})

module.exports = {
    Rating
}