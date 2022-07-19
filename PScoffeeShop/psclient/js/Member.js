function editInfo(){
document.getElementById("memberInfoFS").disabled = false;
document.getElementById("submitNewInfo").hidden = false;
};

$('#submitNewInfo').click(function(){
localStorage.getItem("userID");
console.log(localStorage.getItem("userID"));
var userData=localStorage.getItem("userID");
var jsonString={userID:userData};
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


	var newString = {email: email, password: password, firstName: firstName, lastName: lastName, phone: phone, street:street, city:city, state:state, zipCode:zipCode, country:country};

console.log(jsonString);

  $.ajax({
      url: "http://localhost:6363" + "/memberInformation/edit",
      type: "put",
      data: combinedString,
      success: function(response){
      console.log(response);
      var res= JSON.parse(response);
      if (res.msg==="SUCCESS"){
      $('#email').val();
      $('#password').val();
      $('#firstName').val();
      $('#lastName').val();
      $('#phone').val();
      $('#street').val();
      $('#city').val();
      $('#state').val();
      $('#zipCode').val();
      $('#country').val();

    }else {
      alert(res.msg);
    }
}, error: function(err){
        alert(err);
      }
});
return false;
});

localStorage.getItem("userID");
console.log(localStorage.getItem("userID"));
var userData=localStorage.getItem("userID");
var jsonString={userID:userData};

console.log(userData);
console.log(jsonString);

$.ajax({
      url: "http://localhost:6363" + "/memberInformation",
      type: "get",
      data: jsonString,
      success: function(response){
        console.log(response);
        var res= JSON.parse(response);
          if (res.msg==="SUCCESS"){
            $('#email').val(res.userData.email);
            $('#password').val(res.userData.password);
            $('#firstName').val(res.userData.firstName);
            $('#lastName').val(res.userData.lastName);
            $('#phone').val(res.userData.custPhone);
            $('#street').val(res.userData.street);
            $('#city').val(res.userData.city);
            $('#state').val(res.userData.state);
            $('#zipCode').val(res.userData.zipCode);
            $('#country').val(res.userData.country);

          }else {
            alert(res.msg);
          }
      }, error: function(err){
              alert(err);
            }
  });
