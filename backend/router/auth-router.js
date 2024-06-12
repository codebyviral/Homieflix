import express from 'express';
import { authcontrollers } from '../controllers/auth-controller.js'
import { validate } from '../middleware/validate-middleware.js';
import { loginSchema, signupSchema } from '../validators/auth-validator.js';

const router = express.Router();


router.route("/").get(authcontrollers.home)

router.route("/register").post(validate(signupSchema), authcontrollers.register)
router.route("/login").post(validate(loginSchema), authcontrollers.login)
router.route("/plans").get(authcontrollers.plans)


export { router }