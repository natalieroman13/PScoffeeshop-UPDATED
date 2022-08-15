function Confirmation(){
	var myAlert="P.S. We received your feedback! Thank you ... Someone will contact you soon. ";
	alert(myAlert);
};


$('#ContactSubmit').click(function(){
	var fullName = $('#fullName').val();
	var phone = $('#phone').val();
	var email = $('#email').val();
	var feedback = $('#feedback').val();


	var jsonString = {fullName: fullName, phone: phone, email: email, feedback: feedback};
console.log(jsonString);


  $.ajax({
      url: "http://localhost:6363" + "/submit-feedback",
      type: "post",
      data: jsonString,
      success: function(response){
				console.log("we in the success");
				// alert("SUCCESS: "+response);
				Confirmation();
      },  error: function(err){
					console.log("we no doing good");
          alert(err);
      }

    });
		return false;
});
