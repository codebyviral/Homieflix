
const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Token not found" })
    }
    console.log(`Token from auth middleware ${token}`);
    next();
}

export { authMiddleware }