$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespamcheckbox").click(function() {

    if($("#receivespamcheckbox").val() == "n") {

      $("#receivespamcheckbox").val("y");
    } else {

      $("#receivespamcheckbox").val("n");
    }
  });




  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="") {
      alert("Error: The First Name box is empty!")
      return;
    }
    if($("#mi").val()=="") {
      alert("Error: The Middle Name box is empty!")
      return;
    }
    if($("#ln").val()=="") {
      alert("Error: The Last Name box is empty!")
      return;
    }
    if($("#em").val()=="") {
      alert("Error: The Email box is empty!")
      return;
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


