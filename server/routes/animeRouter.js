const Router = require("express")
const router = new Router()
const animeController = require("../controllers/animeController")
const infoController = require("../controllers/infoController")

router.post("/", animeController.createAnime)
router.post("/genre/:animeId", animeController.addGenreToAnime)
router.get('/', animeController.gimmiAll)

router.post("/status", infoController.createStatus)
router.post("/release", infoController.createRelease)
router.post("/type", infoController.createType)
router.post("/mpaa", infoController.createMPAA)
router.post("/genre", infoController.createGenre)
router.post("/studio", infoController.createStudio)
router.get("/status", infoController.giveStatuses)
router.get("/genre", infoController.giveGenres)


module.exports = router