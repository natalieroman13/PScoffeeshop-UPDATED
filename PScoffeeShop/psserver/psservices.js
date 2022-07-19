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
      custPhone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country
    };
    connection.query("INSERT INTO Customer SET ?", data, function(err, results){
      if(err){
         return res.status(201).send(JSON.stringify({msg: "Error:" + err}))
      } else {
        return res.status(201).send(JSON.stringify({msg: "SUCCESS"}));
      }
    });

  });

  psapp.post('/submit-feedback', function(req,res){
    var data = {
      fullName: req.body.fullName,
      phone: req.body.phone,
      email: req.body.email,
      feedback: req.body.feedback
    };
console.log("we before query");
    connection.query("INSERT INTO Contact SET ?", data, function(err, results){
      if(err){
         return res.status(201).send(JSON.stringify({msg: "Error:" + err}))
      } else {
        return res.status(201).send(JSON.stringify({msg: "SUCCESS"}));
      }
    });

  });

    psapp.get('/sign-in', function(req,res){
      console.log("we are in the sign in get");
      var email= req.query.email;
      var password= req.query.password;
      console.log(req.query.email);
      console.log(req.query.password);

      connection.query("SELECT * FROM Customer WHERE email = ? AND password = ?", [email, password], function(err, results){
        if(err){
           return res.status(201).send(JSON.stringify({msg: "Error:" + err}));
        } else {
          if(results.length===0){
            return res.status(201).send(JSON.stringify({msg: "Login Error: Check your email or/and password is correct."}));
          } else {
            return res.status(201).send(JSON.stringify({msg: "SUCCESS",userID:results[0].userID}));
          }
        }
      });
    });

    psapp.get('/memberInformation', function(req,res){
      console.log("we are in member informaiton services");
      var data=req.query.userID;
      console.log(data);
      connection.query("SELECT * FROM Customer WHERE userID=?", [data], function(err,results){
        if(err){
           return res.status(201).send(JSON.stringify({msg: "Error:" + err}));

        } else {
          if(results.length===0){
            return res.status(201).send(JSON.stringify({msg: "Not Found"}));

          } else {
            return res.status(201).send(JSON.stringify({msg: "SUCCESS",userData:results[0]}));

          }
        }
      });
    });

    psapp.put('/memberInformation/edit', function(req,res){
      console.log("we are in edit member info service");
      var data=req.query.userID;
      console.log(data);
      connection.query("UPDATE * FROM Customer WHERE userID=?", [data], function(err,results){
        if(err){
           return res.status(201).send(JSON.stringify({msg: "Error:" + err}));

        } else {
          if(results.length===0){
            return res.status(201).send(JSON.stringify({msg: "Not Found"}));

          } else {
            return res.status(201).send(JSON.stringify({msg: "SUCCESS",userData:results[0]}));

          }
        }
      });
    });

};

module.exports = psservices;
