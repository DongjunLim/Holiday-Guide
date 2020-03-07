'use strict'



const express = require('express')
const bodyParser = require('body-parser')
const nuguParser = require('./middlewares/nugu');
const router = require('./router')
//const models = require('./models');
const app = express();





app.use(bodyParser.json());
app.use('/',nuguParser);
app.use('/', router);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})