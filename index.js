const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const controller = require("./router/getTitle")

const router = express.Router();
const dotenv = require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use('/',router);
app.use(controller);

// const dbConnect = require("./dbConnect");

// app.listen(PORT, () => {
//     console.log(`We are flying on Port ${PORT}`);
// });
// const scheduler = require("./job/scrap");
// scheduler();
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
.then(()=>{
    app.listen(PORT, () => {
        console.log(`We are flying on Port${PORT}`);
    })
    require("./job/scrap")
})