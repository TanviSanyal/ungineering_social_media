 
$(document).ready(function () {
    $("#confirmpassword").keyup(function(){
        if ($("#password").val() != $("#confirmpassword").val()) {
            $("#msg").text("Password do not match");
                 
        } else{
            
                
        }
    });
    
    $('#registration_form').submit(function() {
        var url = "registration.php";
        var data = $('#registration_form').serialize();

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
