$(document).ready(function () {

    $('#login_form').submit(function() {
        var url = "login.php";
        var data = $('#login_form').serialize();
        $.ajax({
            url: url,
            data: data,
            success: login_success,
            error: on_error,
            type: "POST"
        });
        return false;
    });
});

var login_success = function (response) {
    response = JSON.parse(response);

    if (response.success) {
        alert(response.message);
        window.location.href = "base.html";
    } else {
        alert(response.message);
    }
};

var on_error = function () {
    alert("something went wrong");
};
