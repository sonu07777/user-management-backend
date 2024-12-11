const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { validateUserRegistration, validateUserLogin } = require("../utils/validator");

const router = express.Router();

router.post("/register", validateUserRegistration, registerUser);
router.post("/login", validateUserLogin, loginUser);

module.exports = router;
