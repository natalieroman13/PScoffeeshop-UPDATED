var subtotal=[0,0,0,0,0,0,0,0];

function quantityTest(quantityID, totalID, price, index){

  var x=$(quantityID).val();
  console.log(x);

  var totalCost=(price*x).toFixed(2);
  console.log(totalCost);

  $(totalID).html("Total for Item(s): "+totalCost);

  subtotal[index]=totalCost;
  console.log(subtotal[index]);
  updateTotal();

};

function updateTotal(){
  var ptotal=0;
  for(x=0;x<subtotal.length;x++){
    ptotal=Math.round(parseFloat(subtotal[x]+ptotal)*100)/100;
    console.log(ptotal);
  }


  var taxamount=Math.round(parseFloat(ptotal*0.07)*100)/100;
  console.log(taxamount);

  var shipping=parseFloat(15);
  console.log(shipping);

  var grandtotal=parseFloat(ptotal+taxamount+shipping).toFixed(2);
  console.log(grandtotal);

  $(taxr).html(taxamount);
  $(subt).html(ptotal);
  $(grandt).html(grandtotal);

};

function Checkout(){
  alert("You have successfully selected items for checkout! At this time we are not processing any orders.");
  location.assign("http://localhost:6363"+"/PSDashboard");
};
