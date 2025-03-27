const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "sillyCoderPritam25"

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


//* auth middleware --->
function authMiddleware(req, res, next) {
    const token = req.headers.token
    const decdedData = jwt.verify(token, JWT_SECRET)

    const username = decdedData.username
    const AutheticatedUser = users.find(user => username === user.username)

    req.user = AutheticatedUser // attach user to request 
    if (!AutheticatedUser) {
        res.json({
            message: "not authenticated user. please sing in"
        })
    }
    else next();
}


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
        // const token = createToken().trim();
        // isUser.token = token;   //no need to add token to isUser anymore because of jwt use

        //* create token using jwt sign() method -->
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        res.header("jwt", token) // send token in header

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
};

//* function to get user details
function getMyDetails(req, res) {
    res.status(200).json({
        username: req.user.username,   // get username and pasword from req.user what i attach in middleware
        password: req.user.password
    })
}

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

//* routes
app.post("/signUp", signUpHandler);
app.post("/signIn", signInHandler);
app.get("/me", authMiddleware, getMyDetails)
const port =  3000
app.listen(port);
console.log(`app listen port: ${port}`);

