const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'snowflake13',
  database: 'mydb'
});

connection.connect((err) =>{
  if (err) throw err;
  console.log('Connected to MYSQL!');
});

var psservices = function(psapp) {
  psapp.post('/create-account', function(req,res){
    var data = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      custPhone: req.body.phone
      // custAddress: req.body.addGroup
    };
    connection.query("INSERT INTO Customer SET ?", data, function(err, results){
      if(err){
         return res.status(201).send(JSON.stringify({msg: "Error:" + err}))
      } else {
        return res.status(201).send(JSON.stringify({msg: "SUCCESS"}));
      }
    });

  });

    // psapp.get('/sign-in', function(req,res){
    //   var data = {
    //     email: req.body.email,
    //     password: req.body.password
    //   };
    //   connection.query("SELECT email, password FROM Customer WHERE email,password = ", data, function(err, results){
    //     if(err){
    //        return res.status(201).send(JSON.stringify({msg: "Error:" + err}));
    //     } if(data!=results){
    //       return res.status(201).send(JSON.stringify({msg: "Login Error:"+err}));
    //     } else {
    //       return res.status(201).send(JSON.stringify({msg: "SUCCESS"}));
    //     }
    //   });
    // });
};

var psservices = function(psapp) {
  psapp.post('/submit-feedback', function(req,res){
    var contact = {
      fullName: req.body.fullName,
      phone: req.body.phone,
      email: req.body.email,
      feedback: req.body.feedback
    };

console.log("we before query");
    connection.query("INSERT INTO Contact SET ?", contact, function(err, results){
      if(err){
         return res.status(201).send(JSON.stringify({msg: "Error:" + err}))
      } else {
        return res.status(201).send(JSON.stringify({msg: "SUCCESS"}));
      }
    });

  });
};

module.exports = psservices;
