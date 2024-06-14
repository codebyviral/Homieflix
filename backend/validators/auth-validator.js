import { z } from 'zod';

// Creating an object schema (zod_)

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(255, { message: "Name should not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(10, { message: "Email must be atleast of 10 characters" })
        .max(50, { message: "Email should not be more than 20 characters" }),
    Phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(3, { message: "Phone must be atleast of 3 characters" })
        .max(255, { message: "Phone should not be more than 255 characters" }),
    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(6, { message: "password must be atleast of 7 characters" })
        .max(1024, { message: "password should not be more than 1024 characters" }),
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .min(10, { message: "email must be atleast of 10 characters" })
        .max(50, { message: "email should not be more than 20 characters" }),
    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(6, { message: "password must be atleast of 7 characters" })
        .max(1024, { message: "password should not be more than 1024 characters" })
})
export { loginSchema, signupSchema }
