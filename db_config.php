<?php
try {
  $host = "localhost";
  $dbname = "db_latihan";
  $user = "root";
  $pass = "";
  # MySQL with PDO_MYSQL
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
}
catch(PDOException $e) {
    echo $e->getMessage();
}
?>
