<?php
include 'db_config.php';

$query = "SELECT * FROM  tb_mahasiswa  ";
$result = $conn->prepare($query);
$result->execute();
while ($show = $result->fetch()) {
  $tampil[] = $show;
}
echo json_encode($tampil);
?>
