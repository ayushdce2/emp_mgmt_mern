const {ProfileFunction, UpdatePersonalDetails} = require("../controllers/UserController.js");
const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");
const {isUpdatePersonalDataValid} = require("../middlewares/isUpdatePersonalDataValid.js");

const router = require("express").Router();

router.get("/profile",isUserAuthenticated, ProfileFunction);
router.put("/updatepersonaldetails",isUserAuthenticated, isUpdatePersonalDataValid, UpdatePersonalDetails);

module.exports = router;