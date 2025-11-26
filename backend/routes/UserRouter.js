const {ProfileFunction, UpdatePersonalDetails,UpdatePassword} = require("../controllers/UserController.js");
const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");
const {isUpdatePersonalDataValid} = require("../middlewares/isUpdatePersonalDataValid.js");
const {isUpdatePasswordDataValid} = require("../middlewares/isUpdatePasswordDataValid.js");

const router = require("express").Router();

router.get("/profile",isUserAuthenticated, ProfileFunction);
router.put("/updatepersonaldetails",isUserAuthenticated, isUpdatePersonalDataValid, UpdatePersonalDetails);
router.put("/updatepassword",isUserAuthenticated, isUpdatePasswordDataValid, UpdatePassword);

module.exports = router;