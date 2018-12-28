require('dotenv').config();
const express = require('express');
const cors =require('cors');
const  bodyParser =require('body-parser');
const morgan= require('morgan');
const boom= require('express-boom');



//controllers
const marsupilamis = require('./App/controllers/marsupilamis');
const logins = require('./App/controllers/logins');

/**
 * Providers
 */
const mongo = require('./providers/mongo');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(boom());
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Origin-Credentials",true);
   next();
});

app.use('/api/v1/', marsupilamis);
 app.use('/api/v1/', logins);
 


mongo.check();
//new ligne
app.use('/', express.static('public'));
app.listen(process.env.APP_PORT,(err)=>{
  if(err){
    console.error(err);
  }else{
     console.log("Marsopilami IS UP 2018!");
  }
});
