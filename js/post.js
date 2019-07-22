$(document).ready(function () {
    $('.post_button').click(function() {
        var url = "homepage_post.php";
        var abc = $(".input_status");
        var post = abc.val();
        var data = {
            'post' : post
        };
        $.ajax({
            url: url,
            data: data,
            success: post_success,
           
            type: "POST"
        });
        return false;
    });



});
var post_success = function (response) {
    response = JSON.parse(response);

    if (response.success) {
        window.location.href="base_hplg.php";    
    } else {
        alert(response.message);
    }
};
