//submit info
$('#createButton').click(function(){
		var email = $('#email').val();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var password = $('#password').val();
		var phone = $('#phone').val();


	var jsonString = {email: email, password: password, firstName: firstName, lastName: lastName, phone: phone};
console.log(jsonString);

  $.ajax({
      url: "http://localhost:6363" + "/create-account",
      type: "post",
      data: jsonString,
      success: function(response){
          alert(response);
					// location.replace("http://localhost:6363"+"/SignIn");
      },
      error: function(err){
          alert(err);
      }
    });
});
