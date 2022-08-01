$('#UpdatePrice').click(function(){
// var quantity= $('#quantity').val();
var pricePerProduct=$('#pricePerProduct').val();

var priceString = {pricePerProduct:productPrice};

console.log(priceString);

  $.ajax({
      url: "http://localhost:6363" + "/getPrice",
      type: "put",
      data: priceString,
      success: function(response){
      console.log(response);
      var res= JSON.parse(response);
      if (res.msg==="SUCCESS"){
        console.log(priceString);

    }else {
      alert(res.msg);
    }
}, error: function(err){
        alert(err);
      }
});
return false;
});
