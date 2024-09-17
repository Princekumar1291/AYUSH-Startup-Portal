const express = require('express');
const user_register = require('../controllers/user_register');

const router = express.Router();

router.use("/user_register", user_register);
router.use("/user_login", user_login);



module.exports = router;