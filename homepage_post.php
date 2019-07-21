<?php
    $hostname = "localhost";
    $username = "root";
    $db_password = "123456";
    $database = "social_media";

    $response = array();
    $conn = mysqli_connect($hostname, $username, $db_password, $database);
    if (!$conn) {
        $response['success'] = false;
        $response['message'] = "Connection failed: " . mysqli_connect_error();
        echo json_encode($response);
        exit();
    }


    $post = $_POST['post'];
    
    $sql = "INSERT INTO posts (user_id, status) VALUES ('1', '$post')";

    if (!mysqli_query($conn, $sql)) {
        $response['success'] = false;
        $response['message'] = "Error: " . $sql . "<br>" . mysqli_error($conn);
        echo json_encode($response);
        exit();
    }

    $response['success'] = true;
    $response['message'] = "Database entry done";
    echo json_encode($response);
    mysqli_close($conn);
?>
