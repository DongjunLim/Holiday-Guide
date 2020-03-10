'use strict'
const {PORT} = require('./config');
const express = require('express')
const bodyParser = require('body-parser')
const nuguParser = require('./middlewares/nugu');
const router = require('./routes/index')
//const models = require('./models');
const app = express();





app.use(bodyParser.json());
app.use('/',nuguParser);
app.use('/holiday', router);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
