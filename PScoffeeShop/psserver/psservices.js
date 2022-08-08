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

    psapp.put('/memberInformationEdit', function(req,res){
      console.log("we are in edit member info service");

        var userData=req.body.userID;
        var email= req.body.email;
        var firstName= req.body.firstName;
        var lastName= req.body.lastName;
        var password= req.body.password;
        var custPhone= req.body.phone;
        var street= req.body.street;
        var city= req.body.city;
        var state= req.body.state;
        var zipCode= req.body.zipCode;
        var country= req.body.country;

      console.log(userData, email, firstName, lastName, password, custPhone, street, city, state, zipCode, country);
      connection.query("UPDATE Customer SET email=?, password=?, firstName=?, lastName=?, custPhone=?, city=?, state=?, zipCode=?, country=?, street=? WHERE userID=?", [email, password, firstName, lastName, custPhone, city, state, zipCode, country, street, userData], function(err,results){
        if(err){
           return res.status(201).send(JSON.stringify({msg: "Error:" + err}))
        } else {
          return res.status(201).send(JSON.stringify({msg: "SUCCESS"}));
        }
      });
    });


};

module.exports = psservices;
