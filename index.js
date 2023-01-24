const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const controller = require("./router/getTitle")

const router = express.Router();
const dotenv = require("dotenv").config()
const app = express();
const PORT = process.env.PORT ;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(controller);


mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
.then(()=>{
    app.listen(PORT, () => {
        console.log(`We are flying on Port ${PORT}`);
    })
    // job scheduler
    setInterval(() => {
        require("./job/scrap")
    }, 10000);
    
})