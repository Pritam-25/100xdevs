const express = require("express")
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken")
const DBconnect = require("./config/database")
const { z } = require("zod")
const PORT = 3000

JWT_SECRET = "prit394amtodo@newfullStack++"

const app = express()
app.use(express.json())

// connect database -->
DBconnect()


// importing bcrypt library -->
const bcrypt = require("bcrypt")
const { default: errorMap } = require("zod/locales/en.js")
const saltRounds = 10



// singup route -->
app.post("/singup", async (req, res) => {
    try {
        // get data from request body -->
        const { username, email, password } = req.body;

        //check all details is filled or not -->
        if (!username || !email || !password) {
            return res.status(500).json({
                success: false,
                message: "please provide all information"
            })
        }


        // check all fields are valid or not using zod library -->
        const userSchema = z.object({
            username: z.string()
                .min(3, { message: "Username must be at least 3 characters long" })
                .max(10, { message: "Username cannot exceed 10 characters" }),
            email: z.string()
                .email({ message: "Invalid email address" }).trim().toLowerCase(), //! Validates proper email format
            password: z.string()
                .min(6, { message: "Password must be at least 6 characters long" }) //! Add password length validation
                .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }) //! At least one uppercase letter
                .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &, #)" }) //! At least one special character
                .refine((password) => password.length >= 5 || !/^\d+$|^[a-zA-Z]+$/.test(password), {
                    message: "Weak password: must contain at least 5 characters"
                }) //! Handle weak password for short length
        });


        const parseData = userSchema.safeParse(req.body)

        if (!parseData.success) {
            res.status(400).json({
                success: false,
                message: "Incorrect format",
                errors: parseData.error
            })
            return
        }

        // use bcrypt library to hashed the password -->
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // insert user to the database usermodel -->
        await UserModel.create({
            username: username,
            email: email,
            password: hashedPassword
        })

        // return responst -->
        res.status(200).json({
            success: true,
            message: "user singed up succesfully"
        })
    } catch (error) {
        // return responst -->
        res.status(404).json({
            success: true,
            message: "error in singed up !",
            error: error.message
        })
    }

})

// singin route -->
app.post("/singin", async (req, res) => {

    try {
        // get data from request body -->
        const { id, password } = req.body;

        // Retrieve user by ID and get the hashed password -->
        const isUser = await UserModel.findOne(
            { _id: id },
            { password: 1 }
        )
        console.log(isUser);

        // if user is not valid return -->
        if (!isUser) {
            res.status(500).json({
                success: false,
                message: "user not found"
            })
        }


        // using bcrypt library to check login credentials -->
        const isPasswrodValid = bcrypt.compare(password, isUser.password)


        // if user present create token and singin the user -->
        if (isPasswrodValid) {
            // creating token -->

            const token = jwt.sign({
                id: isUser._id.toString()
            }, JWT_SECRET)

            res.status(200).json({
                success: true,
                token: token
            })
        }
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "invalid cradentials",
            error: error.message
        })
    }
})

// authentication middleware -->
function auth(req, res, next) {
    const token = req.headers.token;

    const isUser = jwt.verify(token, JWT_SECRET)
    if (isUser) {
        req.userId = isUser.id;
        console.log(isUser.id);
        next()
    }
    else {
        res.status(500).json({
            success: false,
            message: "un autherized user"
        })
    }
}

// create todo route -->
app.post("/create-todo", auth, async (req, res) => {
    try {
        const { title, description } = req.body;
        const user_id = req.userId;

        // check if the todo is already present or not-->
        const isTodoPresent = await TodoModel.findOne({ title: title })
        if (isTodoPresent) {
            res.status(500).json({
                success: false,
                message: "todo is already present. please add another todo."
            })
        }

        await TodoModel.create({
            userId: user_id,
            title: title,
            description: description
        })

        res.status(200).json({
            success: true,
            message: "succesfully created todo"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// get all todo -->
app.post("/get-todo", async (req, res) => {

})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});