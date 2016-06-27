<?php
include 'db_config.php';

$data = json_decode(file_get_contents("php://input"));
$nama = $data->nama;
$alamat = $data->alamat;

$query = "INSERT INTO  tb_mahasiswa  ( id ,  nama ,  alamat ) VALUES (NULL, '$nama', '$alamat')";
$result = $conn->prepare($query);
if ($result->execute()) {
  echo "Berhasil";
}else {
  echo "Gagal";
}
?>
