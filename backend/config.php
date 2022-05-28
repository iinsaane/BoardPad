<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost";
$database = "inventar_BoardPad";
$username = "inventar_BoardPadUser";
$password = "BoardPad12345678";

// Create connection

$db = mysqli_connect($servername, $username, $password, $database);

if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
  }

?>


