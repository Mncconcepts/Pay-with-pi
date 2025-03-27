<?php
include("config.php");

if($_SERVER['REQUEST_METHOD'] == "POST"){

    $name = $_POST['name'];

    $email = $_POST['email']; 

    $password = $_POST['password'];
}


$sql = "INSERT INTO propage (pname, pemail, ppassword) 
VALUES ('$name','$email','$password)";

if ($conn->query($sql) === TRUE) {
    echo "Success";
    header(Location: "Home.jsx");
} else {
    echo "Error: "
}

$conn->close();
?>