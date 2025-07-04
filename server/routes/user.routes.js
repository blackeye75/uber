const express = require('express')

const router = express.Router();

const { body } = require("express-validator")

const authMiddleware = require("../middlewares/auth.middleware")

const userController = require("../controllers/user.controller")

router.post('/register', [body('email').isEmail().withMessage("Invalid Email"), body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must 4 3 characte long'), body('password').isLength({ min: 6 }).withMessage('Passsword must be 6 character long')], userController.registerUser);

router.post('/login', [body('email').isEmail().withMessage("Invalid Email"),
body('password').isLength({ min: 6 }).withMessage('Password must be 6 character long')], userController.loginUser);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

router.get('/logout', authMiddleware.authUser, userController.logoutUser);




module.exports = router;