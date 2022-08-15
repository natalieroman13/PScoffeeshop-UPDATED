//submit info
console.log("we before create acc");
$('#CreateNewAcc').click(function(){
location.assign("http://localhost:6363"+"/CreateAccount");
alert("Redirecting you to new page.");
});

$('#signin').click(function(){
  var email = $('#email').val();
	var password = $('#password').val();

	var signInString = {email:email, password:password};
  console.log(signInString);

  $.ajax({
      url: "http://localhost:6363" + "/sign-in",
      type: "get",
      data: signInString,
      success: function(response){
          var res= JSON.parse(response);
            if (res.msg==="SUCCESS"){
              localStorage.setItem("userID",res.userID);
              location.replace("http://localhost:6363"+"/PSDashboard");
            } else if (res.msg==="Login Error: Check your email or/and password is correct.") {
              $("#loginErr").css("visbility","visible");
              alert(res.msg);
            }else {
              alert(res.msg);
            }
      }, error: function(err){
              alert(err);
            }
  });

});

//Refernce: https://www.w3schools.com/howto/howto_js_toggle_password.asp
$('#showPass').click(function(){
var pass=document.getElementById("password");
  if(pass.type==="password"){
    pass.type="text";
  } else{
    pass.type="password";
  }
});
