const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    avatar: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const UserRole = sequelize.define("user_role", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Role = sequelize.define("role", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, unique: true, allowNull: false}
})

User.hasMany(UserRole, {foreignKey: "userId", onDelete: "CASCADE"})
UserRole.belongsTo(User, {foreignKey: "userId"})

Role.hasMany(UserRole, {foreignKey: "roleId", onDelete: "CASCADE"})
UserRole.belongsTo(Role, {foreignKey: "roleId"})

module.exports = {
    User, UserRole, Role
}