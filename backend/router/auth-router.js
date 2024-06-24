import express from 'express';
import { authcontrollers } from '../controllers/auth-controller.js'
import { validate } from '../middleware/validate-middleware.js';
import { loginSchema, signupSchema } from '../validators/auth-validator.js';
import { authMiddleware } from "../middleware/auth-middlerware.js"
const router = express.Router();


router.route("/").get(authcontrollers.home)

router.route("/register").post(validate(signupSchema), authcontrollers.register)
router.route("/login").post(validate(loginSchema), authcontrollers.login)
router.route("/plans").get(authcontrollers.plans)
router.route("/message").get(authcontrollers.message)
router.route("/order").post(authcontrollers.order)
router.route("/user").get(authMiddleware, authcontrollers.user)

export { router }