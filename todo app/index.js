const express = require("express")
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken")
const DBconnect = require("./config/database")
const PORT = 3000

JWT_SECRET = "prit394amtodo@newfullStack++"

const app = express()
app.use(express.json())


DBconnect()

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

        // insert user to the database usermodel -->
        await UserModel.create({
            username: username,
            email: email,
            password: password
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
            message: "error in singed up !"
        })
    }

})

// singin route -->
app.post("/singin", async (req, res) => {

    try {
        // get data from request body -->
        const { id, password } = req.body;

        // find is the user is present in database or not -->
        const isUser = await UserModel.findOne({
            _id: id,
            password: password
        })
        console.log(isUser);

        // if user present create token and singin the user -->
        if (isUser) {
            // creating token -->
            console.log(isUser._id.toString());

            const token = jwt.sign({
                id: isUser._id
            }, JWT_SECRET)

            res.status(200).json({
                success: true,
                token: token
            })
        }
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "invalid cradentials"
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
        const { title, description, isDone } = req.body;
        const user_id = req.userId;

        // check if the todo is already present or not-->
        const isTodoPresent  = await TodoModel.findOne({title: title})
        if(isTodoPresent){
            res.status(500).json({
                success: false,
                message: "todo is already present. please add another todo."
            })
        }

        await TodoModel.create({
            userId: user_id,
            title: title,
            description: description,
            isDone: isDone
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