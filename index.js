const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000

const app = express();
app.use(express.json());
app.use(cors())

// const user = ghinadesrizky
// const password = QLnACssuyg2FIflb

mongoose.connect("mongodb+srv://ghinadesrizky:QLnACssuyg2FIflb@cluster0.mt2rwr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Database connected")
})

app.get('/', (req, res) => {
    res.send("Welcome to the server")
})

const UserRouter = require('./module/user/user.route')
app.use("/api/v1/user", UserRouter)

app.listen(port, () => {
    console.log("Server listening on port", 5000)
})