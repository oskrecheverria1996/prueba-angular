'use strict'
const express = require('express');
const cors = require('cors');
const authModel = require('./auth/auth.logic')
const authRoutes = require('./auth/auth.routes');
const homeRoutes = require('./home/home.routes');
const properties = require('./config/properties');
const DB = require('./config/db');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    req.send('hello')
})

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

DB();
app.use(cors());
app.use('/api', router);
authRoutes(router);
homeRoutes(router);
app.use(router);
app.listen(properties.PORT, () => console.log(`server running on port ${properties.PORT}`));