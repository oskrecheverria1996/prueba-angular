'use strict'
// Imports
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const peliculasRoutes = require('./routes/peliculas.routes');
const salasRoutes = require('./routes/salas.routes');
const properties = require('./config/properties');
const DB = require('./config/db');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    req.send('hello')
})

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json({limit: '50mb'});
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true, limit: '50mb', parameterLimit: 100000});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

DB();
app.use(cors());
app.use('/api', router);
authRoutes(router);
homeRoutes(router);
peliculasRoutes(router);
salasRoutes(router);
app.use(router);

// Start server
app.listen(properties.PORT, () => {
    console.log(`server running on port ${properties.PORT}`)
});