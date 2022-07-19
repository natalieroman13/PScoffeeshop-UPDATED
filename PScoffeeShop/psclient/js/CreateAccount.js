//submit info
$('#createButton').click(function(){
		var email = $('#email').val();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var password = $('#password').val();
		var phone = $('#phone').val();
		var street= $('#street').val();
		var city= $('#city').val();
		var state= $('#state').val();
		var zipCode= $('#zipCode').val();
		var country= $('#country').val();


	var jsonString = {email: email, password: password, firstName: firstName, lastName: lastName, phone: phone, street:street, city:city, state:state, zipCode:zipCode, country:country};

console.log(jsonString);

  $.ajax({
      url: "http://localhost:6363" + "/create-account",
      type: "post",
      data: jsonString,
      success: function(response){
				console.log("we making it to success");
					alert("SUCCESS: "+response);
					window.location.assign("http://localhost:6363"+"/SignIn");
    },
      error: function(err){
          alert(err);
      }

    });
return false;
});
