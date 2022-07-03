const express = require('express');
const cors = require('cors');
const psapp = express();
const path = require('path');
const bodyParser = require('body-parser');

psapp.use(cors());

psapp.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

psapp.use(bodyParser.json());
psapp.use(bodyParser.urlencoded({extended:false}));
psapp.use("/psclient", express.static(path.resolve(__dirname + "/../psclient/")));

//make the server
var psserver;
var port = process.env.PORT || process.env.NODE_PORT || 6363;

//page routers
var psrouter = require('./psrouter.js');
psrouter(psapp);

//services listeners
var psservices = require('./psservices.js');
psservices(psapp);

//listen
psserver = psapp.listen(port, function(err){
  if(err){
    throw err;
  } else{
    console.log("Listening on port: " + port);
  }
});
