const express = require("express")
const bodyperser = require("body-parser")
const app = express()

// app.use(express.json())
app.use(bodyperser.json())   // use express.json()  or express.json


app.post("/sum", function (req, res) {
    console.log(req.body);  // if not use bodyperser it print undefined

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        sum: a + b
    })

})

app.listen(3000)