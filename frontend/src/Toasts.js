const toastMessages = [
    {
        id: 0,
        type: "empty email",
        message: "Enter your email"
    },
    {
        id: 1,
        type: "Login success",
        message: "Login Successful"
    },
    {
        id: 2,
        type: "Any error",
        message: "Something Went Wrong"
    },
]
const [emptyEmail, loginSuccess, anyError] = toastMessages
export { emptyEmail, loginSuccess, anyError }