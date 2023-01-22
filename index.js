const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const controller = require("./router/getTitle")


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controller);



mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
.then(()=>{
    app.listen(PORT, () => {
        console.log(`We are flying on ${PORT}`);
    })
    require("./job/scrap")
})