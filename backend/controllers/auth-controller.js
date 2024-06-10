// Controllers are used to typically process the incoming requests, interact with models.

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

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to Homieflix from Controller')
    } catch (error) {
        console.log(`Home controller error. ${error}`)
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({ message: req.body })
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

const authcontrollers = { home, register, plans }

export { authcontrollers }