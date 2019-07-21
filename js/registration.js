 
$(document).ready(function () {
    
    $('#registration_form').submit(function() {
        var url = "registration.php";
        var data = $('#registration_form').serialize();
         if ($("#password").val() != $("#confirmpassword").val()) {
            alert("Password do not match");
            return false;
      
        } 
       
        $.ajax({
            url: url,
            data: data,
            success: registration_success,
            error: on_error,
            type: "POST"
		    
        });
        
        return false;
    });
    
 });   


var registration_success = function (response) {
    response = JSON.parse(response);

    if (response.success) {
        alert(response.message);
        window.location.href = "login.html";
    } else {
        alert(response.message);
    }
};

var on_error = function () {
    alert("something went wrong");
};
