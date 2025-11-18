const {ProfileFunction} = require("../controllers/UserController.js");
const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");

const router = require("express").Router();

router.get("/profile",isUserAuthenticated, ProfileFunction);

module.exports = router;