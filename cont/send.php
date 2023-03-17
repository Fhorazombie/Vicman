<?php
function verificar($direccion) {
   $Sintaxis='#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$#';
   if(preg_match($Sintaxis,$direccion))
      return true;
   else
     return false;
}


if(isset($_POST['g-recaptcha-response'])){
  $captcha=$_POST['g-recaptcha-response'];
}
if(!$captcha){
  echo "<p style='color:#f00 '>*Por favor dale click al captcha</p>";
  exit;
}

$secretKey = "6LeryBMUAAAAAJVdXtvAAoDp4-7iH6uAmsDdDG7H";
$ip = $_SERVER['REMOTE_ADDR'];
$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
$responseKeys = json_decode($response,true);
if(intval($responseKeys["success"]) !== 1) {
  echo '<h2>Corre por tu vida! Bueno no, solo espera un poco puede que esta seccion siga en mantenimiento manda un correo a lalechugaencalzones@gmail.com</h2>';
} else {

  $correo=$_REQUEST['correo'];
  if(verificar($correo)) {
  	$correo=$_REQUEST['correo'];
    $correo = htmlspecialchars($correo, ENT_QUOTES, 'utf-8');
    $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);

  	$nombre=$_REQUEST['nombre'];
    $nombre = htmlspecialchars($nombre, ENT_QUOTES, 'utf-8');
    $nombre = filter_var($nombre, FILTER_SANITIZE_URL);

  	$telefono=$_REQUEST['telefono'];
    $telefono = htmlspecialchars($telefono, ENT_QUOTES, 'utf-8');
    $telefono = filter_var($telefono, FILTER_SANITIZE_NUMBER_FLOAT);

  	$mensaje=$_REQUEST['mensaje'];
    $mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'utf-8');
    $mensaje = filter_var($mensaje, FILTER_SANITIZE_STRING);

    $mensajecompleto.="<h1>Nombre: $nombre</h1>";
    $mensajecompleto.="<h1>Telefono: $telefono</h1>";
    $mensajecompleto.="<h1>Correo: $correo</h1>";
    $mensajecompleto.="<h1>Mensaje: </br>$mensaje</h1>";


  	//para el envío en formato HTML 
  	$from = "MIME-Version: 1.0\r\n"; 
  	$from .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
  	$from .="From: $nombre <$correo>\r\nReturn-path: $correo";
  	$subject="Mensaje desde Vicman.mx :V";


  	$envio = mail("contacto@vicman.mx", $subject, $mensajecompleto, $from);

  	if ($envio == True) {
  		echo "Tu email fue enviado exitosamente!!!";
  	} else {
  		echo "Uuuuups algo salio mal, pueden intentarlo de nuevo en un momento!!!!";
  	}

  } else {
  	echo "<p style='color:#f00 '>*Tu email es incorrecto, por favor ingresa un mail verdadero</p>";
  }


}

?>
