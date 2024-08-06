const ApiError = require("../error/ApiError")

class UserController {
    async registration(req, res) {

    }
    async login(req, res) {

    }
    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            next(ApiError.badRequest("id does not exist"))
        }
        res.status(200).json(id)
    }
}

module.exports = new UserController()