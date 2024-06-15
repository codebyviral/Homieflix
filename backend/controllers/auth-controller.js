// Controllers are used to typically process the incoming requests, interact with models.
import { User } from "../models/user-model.js"
import bcrypt from 'bcryptjs'
const Plans = [
    {
        id: 0,
        title: "Basic Streaming Plan",
        price: "₹29",
        duration: "1 Day",
        loginCount: "Single device Login",
        users: "1 user"
    },
    {
        id: 1,
        title: "Standard Streaming Plan",
        price: "₹189",
        duration: "19 Days",
        loginCount: "Single device Login",
        users: "1 user"
    },
    {
        id: 2,
        title: "Premium Streaming Plan",
        price: "₹249",
        duration: "1 Month",
        loginCount: "Single device Login",
        users: "1 user"
    }
]
const messages = [
    {
        id: 0,
        message: "Registration successful  🎉"
    },
    {
        id: 1,
        message: "Login successful  🎉"
    }
]
const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to Homieflix from Controller')
    } catch (error) {
        console.log(`Home controller error. ${error}`)
    }
}
// 1. Get registration data

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExists = await User.findOne({ email })

        if (userExists) {
            alert(`Email already Exists`)
            return res.status(400).json({ msg: "Email Already Exists" })
        }

        // Password hashing goes here...

        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({ username, email, phone, password: hash_password })

        res.status(200).json({
            message: "Registration Success!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        })
    } catch (error) {
        console.log(`Register controller error. ${error}`)
    }
}

const plans = async (req, res) => {
    try {
        res.json(Plans)
    } catch (error) {
        console.log(`Plans controller error. ${error}`)
    }
}

const message = async (req, res) => {
    try {
        res.json(messages)
    } catch (error) {
        console.log(`Message sending error ${error}`)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email })
        if (!userExists) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        // const user = await bcrypt.compare(password, userExists.password);
        const user = await userExists.comparePassword(password);

        if (user) {
            res.status(200).json({
                message: "Login Success!",
                token: await userExists.generateToken()
            })

        } else {
            res.status(401).json({ message: "Invalid email or password" })
        }

    } catch (error) {
        res.status(500).send(`Internal Server Error`)
        next(error)
    }
}

const authcontrollers = { home, register, plans, login, message }

export { authcontrollers }