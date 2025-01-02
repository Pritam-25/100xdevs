import express from "express";
import jwt from "jsonwebtoken"

const app = express();
app.use(express.json()); // parse the data came from request body

const users = [];

//* manually create token to verify user -->
// function createToken() {
//     const options = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = ''

//     for (let i = 0; i < 25; i++) {
//         const randoIndex = Math.floor(Math.random() * options.length);
//         token += options[randoIndex]
//     }
//     return token;
// }

//* function to handel sign up
function signUpHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.status(200).json({
        success: true,
        message: "you are signed up"
    })
    console.log(users);
};

//* function to handel sign in
function signInHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const isUser = users.find(function (user) {
        if (user.username === username && user.password === password) {
            return true;
        } else {
            return false;
        }
    });

    if (isUser) {
        const token = createToken().trim();
        isUser.token = token;
        res.status(200).json({
            success: true,
            token: token
        });
        // console.log(` IS USER: ${JSON.stringify(isUser)}`); // Log the user object with token
    } else {
        res.status(500).json({
            success: false,
            message: "Invalid user"
        });
    }
    console.log(users);

};

//* function to get user details
function getMyDetails(req, res) {
    const mytoken = req.headers.token;

    const findUser = users.find(function (user) {
        if (user.token === mytoken) return true
        else return false
    })

    if (findUser) {
        res.status(200).json({
            success: true,
            message: users
        })
    } else {
        res.status(500).json({
            success: false,
            message: "not a authenticated user!"
        })
    }
}

//* routes
app.post("/signUp", signUpHandler);
app.post("/signIn", signInHandler);
app.get("/me", getMyDetails)

app.listen(3000);
