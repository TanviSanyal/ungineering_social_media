<?php
    session_start();
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

    $sql = "SELECT * FROM users";

    $result = mysqli_query($conn, $sql);
    if (!$result) {
        $response['success'] = false;
        $response['message'] = "Error: " . $sql . "<br>" . mysqli_error($conn);
        echo json_encode($response);
        exit();
    }

    $email = $_POST['email'];
    $pass = $_POST['password'];

    $flag = 0;
    $n;
    while ($row=mysqli_fetch_array($result)) {
        if ($email == $row['email'] && $pass == $row['password']) {
            $flag = 1;
            $n=$row['name'];
            break;
        }
    }
    
    if ($flag == 0) {
        $response['success'] = false;
        $response['message'] = "Login failed";
        echo json_encode($response);
    } else {
        $response['success'] = true;
        $response['message'] = "Hello";
        echo json_encode($response);
         //echo "hello ". $n ."<br/>";
        $_SESSION['id']=$row['id'];
        $_SESSION['name']=$row['name'];
        
        ?>
        
        <a href="base_hplg.php">click here</a>
    }
        <?php
    
    mysqli_close($conn);
?>

