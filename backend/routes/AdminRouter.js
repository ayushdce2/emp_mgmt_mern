const {UserToUpdateData, UserListFunction, UpdateUserData} = require("../controllers/AdminController.js");
const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");
const {userDataValidation} = require("../middlewares/isUpdateUserDataValid.js");

const router = require("express").Router();

router.get("/updateuser",isUserAuthenticated, UserToUpdateData);
router.put("/updateuser",isUserAuthenticated, userDataValidation, UpdateUserData);
router.get("/userlist",isUserAuthenticated, UserListFunction);

module.exports = router;