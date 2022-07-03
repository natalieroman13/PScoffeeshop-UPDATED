const path = require('path');

//page routers
var psrouter = function(psapp){
  psapp.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/CreateAccount.html"));
  });

  psapp.get("/SignIn", function(req, res) {
    console.log("we are signing in ");
    res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/SignIn.html"));
  });

  psapp.get("/CreateAccount", function(req, res) {
console.log("we creating account");
    res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/CreateAccount.html"));
  });

  psapp.get("/PSDashboard", function(req, res) {
    console.log("we are in the dashboard");
    res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/PSDashboard.html"));
  });


  psapp.get("/Contact", function(req, res) {
    res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/Contact.html"));
  });
  //
  // psapp.get("/Subscriptions", function(req, res) {
  //   res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/Subscriptions.html"));
  // });
  //
  // psapp.get("/WorkWithUs", function(req, res) {
  //   res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/WorkWithUs.html"));
  // });
  //
  // psapp.get("/Cart", function(req, res) {
  //   res.status(200).sendFile(path.join(__dirname + "/../psclient/HTMLcode/Cart.html"));
  // });
};

module.exports = psrouter;
