<?php
include 'db_config.php';
$p_id = $_POST['p_id'];
$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$query = "UPDATE  tb_mahasiswa  SET  id  = '$id',  nama  = '$nama',  alamat  = '$alamat' WHERE  tb_mahasiswa . id  = $p_id";
$result = $conn->prepare($query);
$result->execute();
header('location:index.html');
?>
