const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const {User} = require("./user");
const {AnimeList} = require("./anime");

const List = sequelize.define("list", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const TypeList = sequelize.define("type_list", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false}
})

User.hasOne(List, {foreignKey: "userId", onDelete: "CASCADE"})
List.belongsTo(User, {foreignKey: "userId"})

List.hasMany(TypeList, {foreignKey: "listId", onDelete: "CASCADE"})
TypeList.belongsTo(List, {foreignKey: "listId"})

TypeList.hasMany(AnimeList, {foreignKey: "typeListId", onDelete: "CASCADE"})
AnimeList.belongsTo(TypeList, {foreignKey: "typeListId"})

module.exports = {
    List, TypeList
}