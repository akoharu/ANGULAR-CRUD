<?php
include 'db_config.php';
$id = $_GET['id'];
$query = "DELETE FROM tb_mahasiswa WHERE id = '$id'";
$result = $conn->prepare($query);
if ($result->execute()) {
  echo "Data Berhasil dihapus";
}else {
  echo "Gagal menghapus";
}
?>
