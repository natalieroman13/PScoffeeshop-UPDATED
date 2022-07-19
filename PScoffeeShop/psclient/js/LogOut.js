function LogOut(){
  localStorage.removeItem("userID");
  alert("You have logged out Successfully!");
  location.assign("http://localhost:6363"+"/");
};
