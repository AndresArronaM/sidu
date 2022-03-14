<?php


$myfile = $_GET['doc'];
$dir = "/mnt/Almacenamiento/vecs/";
//echo "Nombre del archivo".$myfile;
//exit;


switch (strtolower(end(explode(".", $myfile)))) {
    case "pdf":
        fdonwloadPdf($myfile, $dir);
        break;
    case "zip":
        fdonwloadZip($myfile, $dir);
        break;
    case "rar":
        fdonwloadRar($myfile, $dir);
        break;
    case "7z":
        fdonwloadZz($myfile, $dir);
        break;
    default:
        fdonwloadPdf($myfile, $dir);
}


function fdonwloadZip($filename, $filepath)
{

    @ini_set('error_reporting', E_ALL & ~E_NOTICE);
    @ini_set('zlib.output_compression', 'Off');
    //Encabezados para archivos .zip
    header('Content-Type: application/zip');
    header('Content-Transfer-Encoding: Binary');
    //El nombre predeterminado que verá el cliente
    header('Content-disposition: attachment; filename="' . basename($filepath . $filename) . '"');
    //Que no haya límite en la ejecución del script
    @set_time_limit(0);

    //Imprime el contenido del archivo
    readfile($filepath . $filename);

}


function fdonwloadRar($filename, $filepath)
{


//if (!array_key_exists("i", $_GET) || !is_numeric($_GET["i"]))
//    die("Index unspecified or non-numeric");


    $file = $filepath . $filename;

    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($file));
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    ob_clean();
    flush();
    readfile($file);
    exit;

}


function fdonwloadPdf($filename, $filepath)
{

    @ini_set('error_reporting', E_ALL & ~E_NOTICE);
    @ini_set('zlib.output_compression', 'Off');
    //Encabezados para archivos .zip
    header('Content-Type: application/octet-stream');
    header('Content-Transfer-Encoding: Binary');
    //El nombre predeterminado que verá el cliente
    header('Content-disposition: attachment; filename="' . basename($filepath . $filename) . '"');
    //Que no haya límite en la ejecución del script
    @set_time_limit(0);

    //Imprime el contenido del archivo
    readfile($filepath . $filename);

}


function detectUserAgent()
{
    if (!array_key_exists('HTTP_USER_AGENT', $_SERVER))
        return "Other";

    $uas = $_SERVER['HTTP_USER_AGENT'];
    if (preg_match("@Opera/@", $uas))
        return "Opera";
    if (preg_match("@Firefox/@", $uas))
        return "Firefox";
    if (preg_match("@Chrome/@", $uas))
        return "Chrome";
    if (preg_match("@MSIE ([0-9.]+);@", $uas, $matches)) {
        if (((float)$matches[1]) >= 7.0)
            return "IE";
    }

    return "Other";
}

/*


if(!empty($_GET['doc']) && !preg_match('=/=', $_GET['doc'])) {
    if(file_exists ($dir.$_GET['doc']))     {
        makeDownload($_GET['doc'], $dir);
    }

}

function makeDownload($file, $dir)
{
    switch(strtolower(end(explode(".", $file)))) {
      case "pdf": $type = "application/octet-stream"; break;
      case "zip": $type = "application/zip"; break;
      case "rar": $type = "application/x-rar-compressed"; break;
      case "7z": $type = "application/x-7z-compressed"; break;
      default: $type = "application/octet-stream";
    }
    header("Content-Type: $type");
    header("Content-Disposition: attachment; filename=\"$file\"");
    readfile($dir.$file);
    exit; // you should exit here to prevent the file from becoming corrupted if anything else gets echo'd after this function was called.
}

*/

/*
function obtenerType($file){

	switch(strtolower(end(explode(".", $file)))) {
      case "pdf": $type = "application/octet-stream"; break;
      case "zip": $type = "application/zip"; break;
      case "rar": $type = "application/x-rar-compressed"; break;
      case "7z": $type = "application/x-7z-compressed"; break;
      default: $type = "application/octet-stream";
    }

    return $type;
}

$fullPath    = "/mnt/Almacenamiento/".$myfile;




if ($fd = fopen ($fullPath, "rb")) {
   $fsize    =filesize($fullPath);
   $fname     = basename ($fullPath);
   $content = obtenerType($myfile);
   header("Pragma: ");
   header("Cache-Control: ");

   header("Content-type:$content");
   header("Content-Disposition: attachment; filename=\"".$fname."\"");
   header("Content-length: $fsize");

   fpassthru($fd);
}else{

echo "error al mostrar el archivo";
exit;
}

*/

?>
