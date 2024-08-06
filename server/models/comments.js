const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const {User} = require("./user");
const {Anime} = require("./anime");

const Comments = sequelize.define("comments", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false}
})

User.hasMany(Comments, {foreignKey: "userId"})
Comments.belongsTo(User, {foreignKey: "userId"})

Anime.hasMany(Comments, {foreignKey: "animeId", onDelete: "CASCADE"})
Comments.belongsTo(Anime, {foreignKey: "animeId"})

module.exports = {
    Comments
}