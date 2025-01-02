const express = require("express")

const app = express()


// function isOldEnough(age) {
//     if (age > 15) return true
//     else return false
// }

//* implement isOldEnough through middleware ===>
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age
    if (age > 15) {
        next()
    }
    else {
        res.send("Has not aged yet")
    }
}

//? one way of implementing the middleware ==>
// app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
//         res.send("eligible for ride 1")
// })

// app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
//     res.send("eligible for ride 2")
// })

//? another way of implementing the middleware ==>

app.use(isOldEnoughMiddleware)  // if all routes use same middleware then we can declare it like this in top of all the routes
app.get("/ride1", function (req, res) {
    res.send("eligible for ride 1")
})

app.get("/ride2", function (req, res) {
    res.send("eligible for ride 2")
})

// app.use(isOldEnoughMiddleware)  // no use if we call it after the routes


app.get("/", function (req, res) {
    res.send("hello world!")
})

app.listen(3000)