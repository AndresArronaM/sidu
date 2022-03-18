<?php
require_once("resource/nusoap.php");
require_once('resource/vendor/autoload.php');

$headers = apache_request_headers();

if (!isset($headers["Authorization"]) || empty($headers["Authorization"])) {
    echo json_encode(array('session' => false, 'success' => false));
    exit;
}

use Firebase\JWT\JWT;

require_once("resource/JWT.php");
define("KEY", "d3s@rrOllOurb@n0", true);

try {
    $token = JWT::decode($headers["Authorization"], KEY, array('HS256'));
} catch (Exception $e) {
    if ($e->getMessage() == "Expired token") {
        echo json_encode(array('session' => false, 'success' => false));
        exit;
    }
}
?>
