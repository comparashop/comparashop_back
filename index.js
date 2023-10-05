require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./src/routes');
const mysql = require('mysql');


const cors = require('cors');
var port = process.env.PORT;
const app = express();

// var uri = process.env.URL;
const uri = process.env.URL

app.use(bodyParser.json());

app.use(cors())

app.use('/api/v1/', apiRouter);



app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
    });

// const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// });

// Établir la connexion à la base de données
// db.connect(function(err) {
//   if (err) {
//     console.error('Erreur de connexion à la base de données : ' + err.stack);
//     return;
//   }
//   console.log('Connecté à la base de données MySQL avec l\'ID de connexion ' + db.threadId);
  
//   // Vous pouvez commencer à effectuer des opérations sur la base de données ici.
//   // Par exemple, vous pouvez exécuter des requêtes SQL.
// });

mongoose.connect(uri)
    .then(() => {
        console.log("successfully connected to the database")
    }).catch(err => {
        console.log("couldnt connect to the database", err);
        process.exit();
    })
    
 

    // mongoose.connect(uri)
    // .then(() => {
    //     console.log("successfully connected to the database")
    // }).catch(err => {
    //     console.log("couldnt connect to the database", err);
    //     process.exit();
    // })