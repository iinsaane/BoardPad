<?php
include("config.php");

// error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);


if(isset($_GET['title']) && isset($_GET['message'])){
    $title = $_GET['title'];
    $message = $_GET['message'];

    $sql = "INSERT INTO messages (title, message) VALUES ('$title', '$message')";
    $result = mysqli_query($db, $sql);
    if($result){
        echo "Message sent!";
    }
    else{
        echo "Error: " . $sql . "<br>" . mysqli_error($db);
    }
} else {
    //echo "fetching data";
    $sql = "SELECT * FROM messages ORDER BY id DESC LIMIT 10";
    $result = mysqli_query($db, $sql);
    //show results in a json onject
    $json = array();
    while($row = mysqli_fetch_assoc($result)){
        $json[] = $row;
    }
    echo "{\"messages\":" . json_encode($json) . "}";

}
?>