    const express = require('express');
    const bodyParser = require('body-parser');

    // create express app
    const app = express();

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // parse application/json
    app.use(bodyParser.json());

    // define a simple route
    app.get('/', (req, res) => {
        res.json({"message": "Welcome to Nodejs CRUD using services."});
    });

    // listen for requests
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });

    //Configuring the database
    const dbConfig = require('./config/database.config.js');
    const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose.connect(dbConfig.DB_URI, {
        dbName: 'NodejsCrud',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database', err);
        process.exit();
    });

    
    const BlogRoute = require('./app/routes/BlogRoutes');
    app.use("/api", BlogRoute);