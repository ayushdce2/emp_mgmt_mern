const {ProfileFunction, UpdatePersonalDetails,UpdatePassword, PunchInFunction,PunchOutFunction,getattandancedetails} = require("../controllers/UserController.js");
const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");
const {isUpdatePersonalDataValid} = require("../middlewares/isUpdatePersonalDataValid.js");
const {isUpdatePasswordDataValid} = require("../middlewares/isUpdatePasswordDataValid.js");
const {isPunchInDataValid} = require("../middlewares/isPunchInDataValid.js");
const {isPunchOutDataValid} = require("../middlewares/isPunchOutDataValid.js");

const router = require("express").Router();

router.get("/profile",isUserAuthenticated, ProfileFunction);
router.put("/updatepersonaldetails",isUserAuthenticated, isUpdatePersonalDataValid, UpdatePersonalDetails);
router.put("/updatepassword",isUserAuthenticated, isUpdatePasswordDataValid, UpdatePassword);
router.get("/markattandance/punchin",isUserAuthenticated, isPunchInDataValid, PunchInFunction);
router.post("/markattandance/punchout",isUserAuthenticated, isPunchOutDataValid, PunchOutFunction);
router.get("/getattandancedetails",isUserAuthenticated, getattandancedetails); 



module.exports = router;