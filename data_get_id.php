<?php
include 'db_config.php';
$id = $_GET['id'];
$query = "SELECT * FROM tb_mahasiswa WHERE id = '$id'";
$result = $conn->prepare($query);
$result->execute();
while ($show = $result->fetch()) {
  $hasil[] = $show;
}
echo json_encode($hasil);
?>
