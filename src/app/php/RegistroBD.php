<?php

$DB_Name = "Datosancarios";
$DB_Host = "localhost";
$DB_User = "root";
$DB_Pass = "";

$conn = mysqli_connect($DB_Host, $DB_User, $DB_Pass, $DB_Name) or die ("Error al conectar con la base de datos");

$Token = $_POST['Token'];
$Simbolo = $_POST['Simbolo'];
$Usuario = $_POST['Email'];
$Contraseña = $_POST['Contraseña'];

$Consulta = "SELECT * FROM DatosClientes WHERE Email = $Usuario AND Pass = $Contraseña";

if ($Consulta) {
    $sql = "INSERT INTO DatosTransaccion (Cripto, Total) VALUES $Simbolo, $Token";
}

?>