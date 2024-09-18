const express = require('express');

const user_register = require('../controllers/user_register');
const user_login = require('../controllers/user_login');
const send_otp = require('../controllers/send_otp');
const registerapplication = require('../controllers/register_application');
const get_application = require('../controllers/getApplication');
const openai = require('../controllers/openai');

const router = express.Router();

router.use("/user_signup", user_register);
router.use("/user_login", user_login);
router.use("/otp",send_otp);
router.use("/register-application",registerapplication);
router.use("/get-application",get_application);
router.use("/chat",openai);


module.exports = router;