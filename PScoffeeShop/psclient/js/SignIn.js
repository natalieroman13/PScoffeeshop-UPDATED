//submit info
$('#signin').click(function(){
  var email = $('#email').val();
	var password = $('#password').val();

	var signInString = {email:email, password:password};
  console.log(signInString);

  $.ajax({
      url: "http://localhost:6363" + "/sign-in",
      type: "post",
      data: signInString,
      success: function(response){
        var data=JSON.parse(response);
        if (data.msg==="SUCCESS"){
          location.replace("http://localhost:6363"+"/PSDashboard");
          alert("SUCCESS: "+response);
        }
      else{
        console.log(data.msg)
      }

  }, error: function(err){
  alert(err);
}
		// return false;
  })
});





$('#CreateNewAcc').click(function(){
location.assign("http://localhost:6363"+"/CreateAccount");
});
