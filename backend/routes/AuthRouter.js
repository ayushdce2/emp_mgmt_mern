const {LoginFunction, SignupFunction} = require("../controllers/AuthController.js");
const {loginValidation,signupValidation} = require("../middlewares/AuthValidation.js");

const router = require("express").Router();

router.post("/login", loginValidation, LoginFunction);
router.post("/signup", signupValidation, SignupFunction);


module.exports = router;