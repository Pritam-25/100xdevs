const express = require("express")

const app = express()


function isOldEnough(age) {
    if (age > 15) return true
    else return false
}

app.get("/ride1", function (req, res) {
    const n = req.query.age
    if (isOldEnough(n)) {
        res.send("eligible for ride 1")
    }
    else res.send("Has not aged yet")
})

app.get("/ride2", function (req, res) {
    const n = req.query.age
    if (isOldEnough(n)) {
        res.send("eligible for ride 2")
    }
    else res.send("Has not aged yet")

})


app.get("/", function (req, res) {
    res.send("hello world!")
})

app.listen(3000)