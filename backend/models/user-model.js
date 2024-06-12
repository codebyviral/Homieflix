import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

// secure password with bcrypt

userSchema.pre("save", async function (next) {
    console.log("pre method", this)
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
})

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

// jsonwebtoken
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
    } catch (error) {
        console.error(error)
    }
}

// defining the collection name:
export const User = new mongoose.model("User", userSchema)

