const {LoginFunction, SignupFunction, LogOutFunction} = require("../controllers/AuthController.js");
const {loginValidation,signupValidation} = require("../middlewares/AuthValidation.js");

const router = require("express").Router();

router.post("/login", loginValidation, LoginFunction);
router.post("/signup", signupValidation, SignupFunction);
router.post("/logout", LogOutFunction);


module.exports = router;