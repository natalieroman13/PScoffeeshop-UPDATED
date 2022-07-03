$('#ContactSubmit').click(function(){
	var fullName = $('#fullName').val();
	var phone = $('#phone').val();
	var email = $('#email').val();
	var feedback = $('#feedback').val();
console.log("before contactString");
	var contactString = {fullName: fullName, phone: phone, email: email, feedback: feedback};
console.log(contactString);
  $.ajax({
      url: "http://localhost:6363" + "/submit-feedback",
      type: "post",
      data: contactString,
      success: function(response){
        return res.status(201).send(JSON.stringify({msg: "Thank you! You have successfully submitted your feedback! We will contact you shortly :)"}));
      },
      error: function(err){
          alert(err);
      }

    });
		return false;
});
